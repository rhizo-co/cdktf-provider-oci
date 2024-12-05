# `dataOciIdentityDomainsMyOauth2ClientCredential` Submodule <a name="`dataOciIdentityDomainsMyOauth2ClientCredential` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyOauth2ClientCredential <a name="DataOciIdentityDomainsMyOauth2ClientCredential" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential oci_identity_domains_my_oauth2client_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential(
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
  my_oauth2_client_credential_id: str,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.myOauth2ClientCredentialId">my_oauth2_client_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#my_oauth2client_credential_id DataOciIdentityDomainsMyOauth2ClientCredential#my_oauth2client_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#authorization DataOciIdentityDomainsMyOauth2ClientCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredential#idcs_endpoint}.

---

##### `my_oauth2_client_credential_id`<sup>Required</sup> <a name="my_oauth2_client_credential_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.myOauth2ClientCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#my_oauth2client_credential_id DataOciIdentityDomainsMyOauth2ClientCredential#my_oauth2client_credential_id}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#authorization DataOciIdentityDomainsMyOauth2ClientCredential#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyOauth2ClientCredential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyOauth2ClientCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMyOauth2ClientCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMyOauth2ClientCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyOauth2ClientCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.isResetSecret">is_reset_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList">DataOciIdentityDomainsMyOauth2ClientCredentialMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.scopes">scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList">DataOciIdentityDomainsMyOauth2ClientCredentialScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList">DataOciIdentityDomainsMyOauth2ClientCredentialTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList">DataOciIdentityDomainsMyOauth2ClientCredentialUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.myOauth2ClientCredentialIdInput">my_oauth2_client_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.myOauth2ClientCredentialId">my_oauth2_client_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_reset_secret`<sup>Required</sup> <a name="is_reset_secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.isResetSecret"></a>

```python
is_reset_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.meta"></a>

```python
meta: DataOciIdentityDomainsMyOauth2ClientCredentialMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList">DataOciIdentityDomainsMyOauth2ClientCredentialMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.scopes"></a>

```python
scopes: DataOciIdentityDomainsMyOauth2ClientCredentialScopesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList">DataOciIdentityDomainsMyOauth2ClientCredentialScopesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.tags"></a>

```python
tags: DataOciIdentityDomainsMyOauth2ClientCredentialTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList">DataOciIdentityDomainsMyOauth2ClientCredentialTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.user"></a>

```python
user: DataOciIdentityDomainsMyOauth2ClientCredentialUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList">DataOciIdentityDomainsMyOauth2ClientCredentialUserList</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `my_oauth2_client_credential_id_input`<sup>Optional</sup> <a name="my_oauth2_client_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.myOauth2ClientCredentialIdInput"></a>

```python
my_oauth2_client_credential_id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_oauth2_client_credential_id`<sup>Required</sup> <a name="my_oauth2_client_credential_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.myOauth2ClientCredentialId"></a>

```python
my_oauth2_client_credential_id: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentialConfig <a name="DataOciIdentityDomainsMyOauth2ClientCredentialConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  my_oauth2_client_credential_id: str,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.myOauth2ClientCredentialId">my_oauth2_client_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#my_oauth2client_credential_id DataOciIdentityDomainsMyOauth2ClientCredential#my_oauth2client_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#authorization DataOciIdentityDomainsMyOauth2ClientCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredential#idcs_endpoint}.

---

##### `my_oauth2_client_credential_id`<sup>Required</sup> <a name="my_oauth2_client_credential_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.myOauth2ClientCredentialId"></a>

```python
my_oauth2_client_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#my_oauth2client_credential_id DataOciIdentityDomainsMyOauth2ClientCredential#my_oauth2client_credential_id}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#authorization DataOciIdentityDomainsMyOauth2ClientCredential#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credential#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}.

---

### DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy <a name="DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialMeta <a name="DataOciIdentityDomainsMyOauth2ClientCredentialMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMeta()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialScopes <a name="DataOciIdentityDomainsMyOauth2ClientCredentialScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopes()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialTags <a name="DataOciIdentityDomainsMyOauth2ClientCredentialTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTags()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialUser <a name="DataOciIdentityDomainsMyOauth2ClientCredentialUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy">DataOciIdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialMetaList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMeta">DataOciIdentityDomainsMyOauth2ClientCredentialMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialMeta">DataOciIdentityDomainsMyOauth2ClientCredentialMeta</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialScopesList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialScopesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopes">DataOciIdentityDomainsMyOauth2ClientCredentialScopes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialScopes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialScopes">DataOciIdentityDomainsMyOauth2ClientCredentialScopes</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialTagsList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTags">DataOciIdentityDomainsMyOauth2ClientCredentialTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialTags">DataOciIdentityDomainsMyOauth2ClientCredentialTags</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialUserList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credential

dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUser">DataOciIdentityDomainsMyOauth2ClientCredentialUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredential.DataOciIdentityDomainsMyOauth2ClientCredentialUser">DataOciIdentityDomainsMyOauth2ClientCredentialUser</a>

---



