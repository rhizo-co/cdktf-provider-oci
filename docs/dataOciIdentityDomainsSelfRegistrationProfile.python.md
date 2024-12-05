# `dataOciIdentityDomainsSelfRegistrationProfile` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfile <a name="DataOciIdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile(
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
  self_registration_profile_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.selfRegistrationProfileId">self_registration_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `self_registration_profile_id`<sup>Required</sup> <a name="self_registration_profile_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.selfRegistrationProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">activation_email_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.afterSubmitText">after_submit_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentText">consent_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList">DataOciIdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentTextPresent">consent_text_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.defaultGroups">default_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">disallowed_email_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.displayName">display_name</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.emailTemplate">email_template</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerLogo">footer_logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerText">footer_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList">DataOciIdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerLogo">header_logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerText">header_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList">DataOciIdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">number_of_days_redirect_url_is_valid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">show_on_login_page</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList">DataOciIdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.userAttributes">user_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileIdInput">self_registration_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileId">self_registration_profile_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `activation_email_required`<sup>Required</sup> <a name="activation_email_required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```python
activation_email_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `after_submit_text`<sup>Required</sup> <a name="after_submit_text" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```python
after_submit_text: DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `allowed_email_domains`<sup>Required</sup> <a name="allowed_email_domains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `consent_text`<sup>Required</sup> <a name="consent_text" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```python
consent_text: DataOciIdentityDomainsSelfRegistrationProfileConsentTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList">DataOciIdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `consent_text_present`<sup>Required</sup> <a name="consent_text_present" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```python
consent_text_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `default_groups`<sup>Required</sup> <a name="default_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```python
default_groups: DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disallowed_email_domains`<sup>Required</sup> <a name="disallowed_email_domains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```python
disallowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```python
display_name: DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `email_template`<sup>Required</sup> <a name="email_template" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```python
email_template: DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList</a>

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `footer_logo`<sup>Required</sup> <a name="footer_logo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```python
footer_logo: str
```

- *Type:* str

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```python
footer_text: DataOciIdentityDomainsSelfRegistrationProfileFooterTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList">DataOciIdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `header_logo`<sup>Required</sup> <a name="header_logo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```python
header_logo: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```python
header_text: DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.meta"></a>

```python
meta: DataOciIdentityDomainsSelfRegistrationProfileMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList">DataOciIdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_days_redirect_url_is_valid`<sup>Required</sup> <a name="number_of_days_redirect_url_is_valid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```python
number_of_days_redirect_url_is_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `show_on_login_page`<sup>Required</sup> <a name="show_on_login_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```python
show_on_login_page: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tags"></a>

```python
tags: DataOciIdentityDomainsSelfRegistrationProfileTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList">DataOciIdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user_attributes`<sup>Required</sup> <a name="user_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```python
user_attributes: DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `self_registration_profile_id_input`<sup>Optional</sup> <a name="self_registration_profile_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileIdInput"></a>

```python
self_registration_profile_id_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `self_registration_profile_id`<sup>Required</sup> <a name="self_registration_profile_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileId"></a>

```python
self_registration_profile_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText()
```


### DataOciIdentityDomainsSelfRegistrationProfileConfig <a name="DataOciIdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  self_registration_profile_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.selfRegistrationProfileId">self_registration_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `self_registration_profile_id`<sup>Required</sup> <a name="self_registration_profile_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.selfRegistrationProfileId"></a>

```python
self_registration_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

### DataOciIdentityDomainsSelfRegistrationProfileConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText()
```


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups()
```


### DataOciIdentityDomainsSelfRegistrationProfileDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName()
```


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate()
```


### DataOciIdentityDomainsSelfRegistrationProfileFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText()
```


### DataOciIdentityDomainsSelfRegistrationProfileHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText()
```


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy()
```


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy()
```


### DataOciIdentityDomainsSelfRegistrationProfileMeta <a name="DataOciIdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta()
```


### DataOciIdentityDomainsSelfRegistrationProfileTags <a name="DataOciIdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags()
```


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText">DataOciIdentityDomainsSelfRegistrationProfileConsentText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileConsentText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText">DataOciIdentityDomainsSelfRegistrationProfileConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName">DataOciIdentityDomainsSelfRegistrationProfileDisplayName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileDisplayName
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName">DataOciIdentityDomainsSelfRegistrationProfileDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText">DataOciIdentityDomainsSelfRegistrationProfileFooterText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileFooterText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText">DataOciIdentityDomainsSelfRegistrationProfileFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText">DataOciIdentityDomainsSelfRegistrationProfileHeaderText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileHeaderText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText">DataOciIdentityDomainsSelfRegistrationProfileHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta">DataOciIdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta">DataOciIdentityDomainsSelfRegistrationProfileMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags">DataOciIdentityDomainsSelfRegistrationProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags">DataOciIdentityDomainsSelfRegistrationProfileTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_self_registration_profile

dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">fully_qualified_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">seq_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes">DataOciIdentityDomainsSelfRegistrationProfileUserAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```python
deletable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `fully_qualified_attribute_name`<sup>Required</sup> <a name="fully_qualified_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```python
fully_qualified_attribute_name: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `seq_number`<sup>Required</sup> <a name="seq_number" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```python
seq_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSelfRegistrationProfileUserAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes">DataOciIdentityDomainsSelfRegistrationProfileUserAttributes</a>

---



