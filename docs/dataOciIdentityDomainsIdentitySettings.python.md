# `dataOciIdentityDomainsIdentitySettings` Submodule <a name="`dataOciIdentityDomainsIdentitySettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentitySettings <a name="DataOciIdentityDomainsIdentitySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings oci_identity_domains_identity_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#idcs_endpoint DataOciIdentityDomainsIdentitySettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attributes DataOciIdentityDomainsIdentitySettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attribute_sets DataOciIdentityDomainsIdentitySettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#authorization DataOciIdentityDomainsIdentitySettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#compartment_id DataOciIdentityDomainsIdentitySettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#id DataOciIdentityDomainsIdentitySettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#resource_type_schema_version DataOciIdentityDomainsIdentitySettings#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#idcs_endpoint DataOciIdentityDomainsIdentitySettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attributes DataOciIdentityDomainsIdentitySettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attribute_sets DataOciIdentityDomainsIdentitySettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#authorization DataOciIdentityDomainsIdentitySettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#compartment_id DataOciIdentityDomainsIdentitySettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#id DataOciIdentityDomainsIdentitySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#resource_type_schema_version DataOciIdentityDomainsIdentitySettings#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentitySettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentitySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsIdentitySettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsIdentitySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentitySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.identitySettings">identity_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `identity_settings`<sup>Required</sup> <a name="identity_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.identitySettings"></a>

```python
identity_settings: DataOciIdentityDomainsIdentitySettingsIdentitySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentitySettingsConfig <a name="DataOciIdentityDomainsIdentitySettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#idcs_endpoint DataOciIdentityDomainsIdentitySettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attributes DataOciIdentityDomainsIdentitySettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attribute_sets DataOciIdentityDomainsIdentitySettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#authorization DataOciIdentityDomainsIdentitySettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#compartment_id DataOciIdentityDomainsIdentitySettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#id DataOciIdentityDomainsIdentitySettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#resource_type_schema_version DataOciIdentityDomainsIdentitySettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#idcs_endpoint DataOciIdentityDomainsIdentitySettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attributes DataOciIdentityDomainsIdentitySettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attribute_sets DataOciIdentityDomainsIdentitySettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#authorization DataOciIdentityDomainsIdentitySettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#compartment_id DataOciIdentityDomainsIdentitySettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#id DataOciIdentityDomainsIdentitySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#resource_type_schema_version DataOciIdentityDomainsIdentitySettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsIdentitySettingsIdentitySettings <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags()
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword">allow_end_users_to_change_their_password</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount">allow_end_users_to_link_their_support_account</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities">allow_end_users_to_manage_their_capabilities</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings">allow_end_users_to_update_their_security_settings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_end_users_to_change_their_password`<sup>Required</sup> <a name="allow_end_users_to_change_their_password" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword"></a>

```python
allow_end_users_to_change_their_password: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_end_users_to_link_their_support_account`<sup>Required</sup> <a name="allow_end_users_to_link_their_support_account" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount"></a>

```python
allow_end_users_to_link_their_support_account: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_end_users_to_manage_their_capabilities`<sup>Required</sup> <a name="allow_end_users_to_manage_their_capabilities" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities"></a>

```python
allow_end_users_to_manage_their_capabilities: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_end_users_to_update_their_security_settings`<sup>Required</sup> <a name="allow_end_users_to_update_their_security_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```python
allow_end_users_to_update_their_security_settings: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.emitLockedMessageWhenUserIsLocked">emit_locked_message_when_user_is_locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.identitySettingId">identity_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.myProfile">my_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixGid">posix_gid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixUid">posix_uid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.primaryEmailRequired">primary_email_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.removeInvalidEmails">remove_invalid_emails</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.returnInactiveOverLockedMessage">return_inactive_over_locked_message</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tokens">tokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.userAllowedToSetRecoveryEmail">user_allowed_to_set_recovery_email</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings">DataOciIdentityDomainsIdentitySettingsIdentitySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `emit_locked_message_when_user_is_locked`<sup>Required</sup> <a name="emit_locked_message_when_user_is_locked" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.emitLockedMessageWhenUserIsLocked"></a>

```python
emit_locked_message_when_user_is_locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_setting_id`<sup>Required</sup> <a name="identity_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.identitySettingId"></a>

```python
identity_setting_id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList</a>

---

##### `my_profile`<sup>Required</sup> <a name="my_profile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.myProfile"></a>

```python
my_profile: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `posix_gid`<sup>Required</sup> <a name="posix_gid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixGid"></a>

```python
posix_gid: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList</a>

---

##### `posix_uid`<sup>Required</sup> <a name="posix_uid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixUid"></a>

```python
posix_uid: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList</a>

---

##### `primary_email_required`<sup>Required</sup> <a name="primary_email_required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.primaryEmailRequired"></a>

```python
primary_email_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remove_invalid_emails`<sup>Required</sup> <a name="remove_invalid_emails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.removeInvalidEmails"></a>

```python
remove_invalid_emails: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `return_inactive_over_locked_message`<sup>Required</sup> <a name="return_inactive_over_locked_message" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.returnInactiveOverLockedMessage"></a>

```python
return_inactive_over_locked_message: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tokens"></a>

```python
tokens: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList</a>

---

##### `user_allowed_to_set_recovery_email`<sup>Required</sup> <a name="user_allowed_to_set_recovery_email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.userAllowedToSetRecoveryEmail"></a>

```python
user_allowed_to_set_recovery_email: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings">DataOciIdentityDomainsIdentitySettingsIdentitySettings</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentEndsAt">manual_assignment_ends_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentStartsFrom">manual_assignment_starts_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_assignment_ends_at`<sup>Required</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentEndsAt"></a>

```python
manual_assignment_ends_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_starts_from`<sup>Required</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentStartsFrom"></a>

```python
manual_assignment_starts_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentEndsAt">manual_assignment_ends_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentStartsFrom">manual_assignment_starts_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_assignment_ends_at`<sup>Required</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentEndsAt"></a>

```python
manual_assignment_ends_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_starts_from`<sup>Required</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentStartsFrom"></a>

```python
manual_assignment_starts_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_settings

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.expiresAfter">expires_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_after`<sup>Required</sup> <a name="expires_after" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.expiresAfter"></a>

```python
expires_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens</a>

---



