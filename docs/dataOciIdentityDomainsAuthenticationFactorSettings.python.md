# `dataOciIdentityDomainsAuthenticationFactorSettings` Submodule <a name="`dataOciIdentityDomainsAuthenticationFactorSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings oci_identity_domains_authentication_factor_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attributes DataOciIdentityDomainsAuthenticationFactorSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attribute_sets DataOciIdentityDomainsAuthenticationFactorSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#authorization DataOciIdentityDomainsAuthenticationFactorSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#compartment_id DataOciIdentityDomainsAuthenticationFactorSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#id DataOciIdentityDomainsAuthenticationFactorSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSettings#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attributes DataOciIdentityDomainsAuthenticationFactorSettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attribute_sets DataOciIdentityDomainsAuthenticationFactorSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#authorization DataOciIdentityDomainsAuthenticationFactorSettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#compartment_id DataOciIdentityDomainsAuthenticationFactorSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#id DataOciIdentityDomainsAuthenticationFactorSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSettings#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsAuthenticationFactorSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsAuthenticationFactorSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAuthenticationFactorSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authenticationFactorSettings">authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authentication_factor_settings`<sup>Required</sup> <a name="authentication_factor_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authenticationFactorSettings"></a>

```python
authentication_factor_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingsConfig <a name="DataOciIdentityDomainsAuthenticationFactorSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attributes DataOciIdentityDomainsAuthenticationFactorSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attribute_sets DataOciIdentityDomainsAuthenticationFactorSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#authorization DataOciIdentityDomainsAuthenticationFactorSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#compartment_id DataOciIdentityDomainsAuthenticationFactorSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#id DataOciIdentityDomainsAuthenticationFactorSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attributes DataOciIdentityDomainsAuthenticationFactorSettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attribute_sets DataOciIdentityDomainsAuthenticationFactorSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#authorization DataOciIdentityDomainsAuthenticationFactorSettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#compartment_id DataOciIdentityDomainsAuthenticationFactorSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#id DataOciIdentityDomainsAuthenticationFactorSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSettings#resource_type_schema_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">help_desk_code_expiry_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">help_desk_generation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">help_desk_max_usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.maxActive">max_active</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">self_service_generation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `help_desk_code_expiry_in_mins`<sup>Required</sup> <a name="help_desk_code_expiry_in_mins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```python
help_desk_code_expiry_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `help_desk_generation_enabled`<sup>Required</sup> <a name="help_desk_generation_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```python
help_desk_generation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `help_desk_max_usage`<sup>Required</sup> <a name="help_desk_max_usage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```python
help_desk_max_usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_active`<sup>Required</sup> <a name="max_active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.maxActive"></a>

```python
max_active: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_service_generation_enabled`<sup>Required</sup> <a name="self_service_generation_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```python
self_service_generation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.deviceProtectionPolicy">device_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">initial_lockout_period_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.keyPairLength">key_pair_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.lockoutEscalationPattern">lockout_escalation_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">max_failures_before_lockout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">max_failures_before_warning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">max_lockout_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.minPinLength">min_pin_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.policyUpdateFreqInDays">policy_update_freq_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.requestSigningAlgo">request_signing_algo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.sharedSecretEncoding">shared_secret_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">unlock_app_for_each_request_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">unlock_app_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">unlock_on_app_foreground_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">unlock_on_app_start_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_protection_policy`<sup>Required</sup> <a name="device_protection_policy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```python
device_protection_policy: str
```

- *Type:* str

---

##### `initial_lockout_period_in_secs`<sup>Required</sup> <a name="initial_lockout_period_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```python
initial_lockout_period_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_pair_length`<sup>Required</sup> <a name="key_pair_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.keyPairLength"></a>

```python
key_pair_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lockout_escalation_pattern`<sup>Required</sup> <a name="lockout_escalation_pattern" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```python
lockout_escalation_pattern: str
```

- *Type:* str

---

##### `max_failures_before_lockout`<sup>Required</sup> <a name="max_failures_before_lockout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```python
max_failures_before_lockout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_before_warning`<sup>Required</sup> <a name="max_failures_before_warning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```python
max_failures_before_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lockout_interval_in_secs`<sup>Required</sup> <a name="max_lockout_interval_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```python
max_lockout_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pin_length`<sup>Required</sup> <a name="min_pin_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.minPinLength"></a>

```python
min_pin_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_update_freq_in_days`<sup>Required</sup> <a name="policy_update_freq_in_days" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```python
policy_update_freq_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_signing_algo`<sup>Required</sup> <a name="request_signing_algo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```python
request_signing_algo: str
```

- *Type:* str

---

##### `shared_secret_encoding`<sup>Required</sup> <a name="shared_secret_encoding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```python
shared_secret_encoding: str
```

- *Type:* str

---

##### `unlock_app_for_each_request_enabled`<sup>Required</sup> <a name="unlock_app_for_each_request_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```python
unlock_app_for_each_request_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unlock_app_interval_in_secs`<sup>Required</sup> <a name="unlock_app_interval_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```python
unlock_app_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlock_on_app_foreground_enabled`<sup>Required</sup> <a name="unlock_on_app_foreground_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```python
unlock_on_app_foreground_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unlock_on_app_start_enabled`<sup>Required</sup> <a name="unlock_on_app_start_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```python
unlock_on_app_start_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkCustomUrl">email_link_custom_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkEnabled">email_link_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_link_custom_url`<sup>Required</sup> <a name="email_link_custom_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```python
email_link_custom_url: str
```

- *Type:* str

---

##### `email_link_enabled`<sup>Required</sup> <a name="email_link_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```python
email_link_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">max_endpoint_trust_duration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEnrolledDevices">max_enrolled_devices</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">max_trusted_endpoints</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">trusted_endpoints_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_endpoint_trust_duration_in_days`<sup>Required</sup> <a name="max_endpoint_trust_duration_in_days" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```python
max_endpoint_trust_duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_enrolled_devices`<sup>Required</sup> <a name="max_enrolled_devices" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```python
max_enrolled_devices: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_trusted_endpoints`<sup>Required</sup> <a name="max_trusted_endpoints" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```python
max_trusted_endpoints: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_endpoints_enabled`<sup>Required</sup> <a name="trusted_endpoints_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```python
trusted_endpoints_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">mobile_number_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">mobile_number_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mobile_number_enabled`<sup>Required</sup> <a name="mobile_number_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```python
mobile_number_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mobile_number_update_enabled`<sup>Required</sup> <a name="mobile_number_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```python
mobile_number_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.pullEnabled">pull_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_enabled`<sup>Required</sup> <a name="pull_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.pullEnabled"></a>

```python
pull_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.autoEnrollEmailFactorDisabled">auto_enroll_email_factor_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeEnabled">bypass_code_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeSettings">bypass_code_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.clientAppSettings">client_app_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compliancePolicy">compliance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailEnabled">email_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailSettings">email_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.endpointRestrictions">endpoint_restrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fidoAuthenticatorEnabled">fido_authenticator_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.hideBackupFactorEnabled">hide_backup_factor_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.identityStoreSettings">identity_store_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnabledCategory">mfa_enabled_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnrollmentType">mfa_enrollment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.notificationSettings">notification_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.phoneCallEnabled">phone_call_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.pushEnabled">push_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.securityQuestionsEnabled">security_questions_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.smsEnabled">sms_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.thirdPartyFactor">third_party_factor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpEnabled">totp_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpSettings">totp_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.userEnrollmentDisabledFactors">user_enrollment_disabled_factors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.yubicoOtpEnabled">yubico_otp_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_factor_setting_id`<sup>Required</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authenticationFactorSettingId"></a>

```python
authentication_factor_setting_id: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `auto_enroll_email_factor_disabled`<sup>Required</sup> <a name="auto_enroll_email_factor_disabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.autoEnrollEmailFactorDisabled"></a>

```python
auto_enroll_email_factor_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bypass_code_enabled`<sup>Required</sup> <a name="bypass_code_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeEnabled"></a>

```python
bypass_code_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bypass_code_settings`<sup>Required</sup> <a name="bypass_code_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeSettings"></a>

```python
bypass_code_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList</a>

---

##### `client_app_settings`<sup>Required</sup> <a name="client_app_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.clientAppSettings"></a>

```python
client_app_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `compliance_policy`<sup>Required</sup> <a name="compliance_policy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compliancePolicy"></a>

```python
compliance_policy: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `email_enabled`<sup>Required</sup> <a name="email_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailEnabled"></a>

```python
email_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `email_settings`<sup>Required</sup> <a name="email_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailSettings"></a>

```python
email_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList</a>

---

##### `endpoint_restrictions`<sup>Required</sup> <a name="endpoint_restrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.endpointRestrictions"></a>

```python
endpoint_restrictions: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList</a>

---

##### `fido_authenticator_enabled`<sup>Required</sup> <a name="fido_authenticator_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fidoAuthenticatorEnabled"></a>

```python
fido_authenticator_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide_backup_factor_enabled`<sup>Required</sup> <a name="hide_backup_factor_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.hideBackupFactorEnabled"></a>

```python
hide_backup_factor_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_store_settings`<sup>Required</sup> <a name="identity_store_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.identityStoreSettings"></a>

```python
identity_store_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList</a>

---

##### `mfa_enabled_category`<sup>Required</sup> <a name="mfa_enabled_category" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnabledCategory"></a>

```python
mfa_enabled_category: str
```

- *Type:* str

---

##### `mfa_enrollment_type`<sup>Required</sup> <a name="mfa_enrollment_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnrollmentType"></a>

```python
mfa_enrollment_type: str
```

- *Type:* str

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.notificationSettings"></a>

```python
notification_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `phone_call_enabled`<sup>Required</sup> <a name="phone_call_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.phoneCallEnabled"></a>

```python
phone_call_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `push_enabled`<sup>Required</sup> <a name="push_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.pushEnabled"></a>

```python
push_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_questions_enabled`<sup>Required</sup> <a name="security_questions_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.securityQuestionsEnabled"></a>

```python
security_questions_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.smsEnabled"></a>

```python
sms_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `third_party_factor`<sup>Required</sup> <a name="third_party_factor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.thirdPartyFactor"></a>

```python
third_party_factor: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList</a>

---

##### `totp_enabled`<sup>Required</sup> <a name="totp_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpEnabled"></a>

```python
totp_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `totp_settings`<sup>Required</sup> <a name="totp_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpSettings"></a>

```python
totp_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a>

---

##### `user_enrollment_disabled_factors`<sup>Required</sup> <a name="user_enrollment_disabled_factors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.userEnrollmentDisabledFactors"></a>

```python
user_enrollment_disabled_factors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `yubico_otp_enabled`<sup>Required</sup> <a name="yubico_otp_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.yubicoOtpEnabled"></a>

```python
yubico_otp_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.duoSecurity">duo_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duo_security`<sup>Required</sup> <a name="duo_security" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.duoSecurity"></a>

```python
duo_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">email_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailPasscodeLength">email_passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.hashingAlgorithm">hashing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.jwtValidityDurationInSecs">jwt_validity_duration_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.keyRefreshIntervalInDays">key_refresh_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.passcodeLength">passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">sms_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsPasscodeLength">sms_passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepInSecs">time_step_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepTolerance">time_step_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_otp_validity_duration_in_mins`<sup>Required</sup> <a name="email_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```python
email_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_passcode_length`<sup>Required</sup> <a name="email_passcode_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```python
email_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hashing_algorithm`<sup>Required</sup> <a name="hashing_algorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```python
hashing_algorithm: str
```

- *Type:* str

---

##### `jwt_validity_duration_in_secs`<sup>Required</sup> <a name="jwt_validity_duration_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```python
jwt_validity_duration_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_refresh_interval_in_days`<sup>Required</sup> <a name="key_refresh_interval_in_days" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```python
key_refresh_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `passcode_length`<sup>Required</sup> <a name="passcode_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.passcodeLength"></a>

```python
passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_otp_validity_duration_in_mins`<sup>Required</sup> <a name="sms_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```python
sms_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_passcode_length`<sup>Required</sup> <a name="sms_passcode_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```python
sms_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_in_secs`<sup>Required</sup> <a name="time_step_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepInSecs"></a>

```python
time_step_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_tolerance`<sup>Required</sup> <a name="time_step_tolerance" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepTolerance"></a>

```python
time_step_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">attestation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">authenticator_selection_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">authenticator_selection_require_resident_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">authenticator_selection_resident_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">authenticator_selection_user_verification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">domain_validation_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">exclude_credentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">public_key_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```python
attestation: str
```

- *Type:* str

---

##### `authenticator_selection_attachment`<sup>Required</sup> <a name="authenticator_selection_attachment" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```python
authenticator_selection_attachment: str
```

- *Type:* str

---

##### `authenticator_selection_require_resident_key`<sup>Required</sup> <a name="authenticator_selection_require_resident_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```python
authenticator_selection_require_resident_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `authenticator_selection_resident_key`<sup>Required</sup> <a name="authenticator_selection_resident_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```python
authenticator_selection_resident_key: str
```

- *Type:* str

---

##### `authenticator_selection_user_verification`<sup>Required</sup> <a name="authenticator_selection_user_verification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```python
authenticator_selection_user_verification: str
```

- *Type:* str

---

##### `domain_validation_level`<sup>Required</sup> <a name="domain_validation_level" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```python
domain_validation_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_credentials`<sup>Required</sup> <a name="exclude_credentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```python
exclude_credentials: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `public_key_types`<sup>Required</sup> <a name="public_key_types" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```python
public_key_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">api_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">attestation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">user_mapping_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

---

##### `attestation_key`<sup>Required</sup> <a name="attestation_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```python
attestation_key: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `user_mapping_attribute`<sup>Required</sup> <a name="user_mapping_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```python
user_mapping_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_settings

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">duo_security_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duo_security_settings`<sup>Required</sup> <a name="duo_security_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```python
duo_security_settings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



