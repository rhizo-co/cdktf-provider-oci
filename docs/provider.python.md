# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-oci.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciProvider <a name="OciProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs oci}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import provider

provider.OciProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  auth: str = None,
  config_file_profile: str = None,
  disable_auto_retries: typing.Union[bool, IResolvable] = None,
  fingerprint: str = None,
  ignore_defined_tags: typing.List[str] = None,
  private_key: str = None,
  private_key_password: str = None,
  private_key_path: str = None,
  realm_specific_service_endpoint_template_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  retry_duration_seconds: typing.Union[int, float] = None,
  tenancy_ocid: str = None,
  user_ocid: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.auth">auth</a></code> | <code>str</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.configFileProfile">config_file_profile</a></code> | <code>str</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.disableAutoRetries">disable_auto_retries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.fingerprint">fingerprint</a></code> | <code>str</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.ignoreDefinedTags">ignore_defined_tags</a></code> | <code>typing.List[str]</code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPassword">private_key_password</a></code> | <code>str</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPath">private_key_path</a></code> | <code>str</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.realmSpecificServiceEndpointTemplateEnabled">realm_specific_service_endpoint_template_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.retryDurationSeconds">retry_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.userOcid">user_ocid</a></code> | <code>str</code> | (Optional) The user OCID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.auth"></a>

- *Type:* str

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `config_file_profile`<sup>Optional</sup> <a name="config_file_profile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.configFileProfile"></a>

- *Type:* str

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `disable_auto_retries`<sup>Optional</sup> <a name="disable_auto_retries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.disableAutoRetries"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.fingerprint"></a>

- *Type:* str

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `ignore_defined_tags`<sup>Optional</sup> <a name="ignore_defined_tags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.ignoreDefinedTags"></a>

- *Type:* typing.List[str]

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKey"></a>

- *Type:* str

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `private_key_password`<sup>Optional</sup> <a name="private_key_password" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPassword"></a>

- *Type:* str

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `private_key_path`<sup>Optional</sup> <a name="private_key_path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPath"></a>

- *Type:* str

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `realm_specific_service_endpoint_template_enabled`<sup>Optional</sup> <a name="realm_specific_service_endpoint_template_enabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.realmSpecificServiceEndpointTemplateEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.region"></a>

- *Type:* str

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `retry_duration_seconds`<sup>Optional</sup> <a name="retry_duration_seconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.retryDurationSeconds"></a>

- *Type:* typing.Union[int, float]

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `tenancy_ocid`<sup>Optional</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.tenancyOcid"></a>

- *Type:* str

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `user_ocid`<sup>Optional</sup> <a name="user_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.userOcid"></a>

- *Type:* str

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile">reset_config_file_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries">reset_disable_auto_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint">reset_fingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags">reset_ignore_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword">reset_private_key_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath">reset_private_key_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled">reset_realm_specific_service_endpoint_template_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds">reset_retry_duration_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid">reset_tenancy_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid">reset_user_ocid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auth` <a name="reset_auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_config_file_profile` <a name="reset_config_file_profile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile"></a>

```python
def reset_config_file_profile() -> None
```

##### `reset_disable_auto_retries` <a name="reset_disable_auto_retries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries"></a>

```python
def reset_disable_auto_retries() -> None
```

##### `reset_fingerprint` <a name="reset_fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```

##### `reset_ignore_defined_tags` <a name="reset_ignore_defined_tags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags"></a>

```python
def reset_ignore_defined_tags() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_private_key_password` <a name="reset_private_key_password" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword"></a>

```python
def reset_private_key_password() -> None
```

##### `reset_private_key_path` <a name="reset_private_key_path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath"></a>

```python
def reset_private_key_path() -> None
```

##### `reset_realm_specific_service_endpoint_template_enabled` <a name="reset_realm_specific_service_endpoint_template_enabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled"></a>

```python
def reset_realm_specific_service_endpoint_template_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_retry_duration_seconds` <a name="reset_retry_duration_seconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds"></a>

```python
def reset_retry_duration_seconds() -> None
```

##### `reset_tenancy_ocid` <a name="reset_tenancy_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid"></a>

```python
def reset_tenancy_ocid() -> None
```

##### `reset_user_ocid` <a name="reset_user_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid"></a>

```python
def reset_user_ocid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import provider

provider.OciProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import provider

provider.OciProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider"></a>

```python
from rhizo-co_cdktf_provider_oci import provider

provider.OciProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import provider

provider.OciProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OciProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OciProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OciProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput">auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput">config_file_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput">disable_auto_retries_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput">ignore_defined_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput">private_key_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput">private_key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput">realm_specific_service_endpoint_template_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput">retry_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput">tenancy_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput">user_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth">auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile">config_file_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries">disable_auto_retries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags">ignore_defined_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword">private_key_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath">private_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled">realm_specific_service_endpoint_template_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds">retry_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid">user_ocid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput"></a>

```python
auth_input: str
```

- *Type:* str

---

##### `config_file_profile_input`<sup>Optional</sup> <a name="config_file_profile_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput"></a>

```python
config_file_profile_input: str
```

- *Type:* str

---

##### `disable_auto_retries_input`<sup>Optional</sup> <a name="disable_auto_retries_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput"></a>

```python
disable_auto_retries_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `ignore_defined_tags_input`<sup>Optional</sup> <a name="ignore_defined_tags_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput"></a>

```python
ignore_defined_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `private_key_password_input`<sup>Optional</sup> <a name="private_key_password_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput"></a>

```python
private_key_password_input: str
```

- *Type:* str

---

##### `private_key_path_input`<sup>Optional</sup> <a name="private_key_path_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput"></a>

```python
private_key_path_input: str
```

- *Type:* str

---

##### `realm_specific_service_endpoint_template_enabled_input`<sup>Optional</sup> <a name="realm_specific_service_endpoint_template_enabled_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput"></a>

```python
realm_specific_service_endpoint_template_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `retry_duration_seconds_input`<sup>Optional</sup> <a name="retry_duration_seconds_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput"></a>

```python
retry_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy_ocid_input`<sup>Optional</sup> <a name="tenancy_ocid_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput"></a>

```python
tenancy_ocid_input: str
```

- *Type:* str

---

##### `user_ocid_input`<sup>Optional</sup> <a name="user_ocid_input" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput"></a>

```python
user_ocid_input: str
```

- *Type:* str

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth"></a>

```python
auth: str
```

- *Type:* str

---

##### `config_file_profile`<sup>Optional</sup> <a name="config_file_profile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile"></a>

```python
config_file_profile: str
```

- *Type:* str

---

##### `disable_auto_retries`<sup>Optional</sup> <a name="disable_auto_retries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries"></a>

```python
disable_auto_retries: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `ignore_defined_tags`<sup>Optional</sup> <a name="ignore_defined_tags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags"></a>

```python
ignore_defined_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_password`<sup>Optional</sup> <a name="private_key_password" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword"></a>

```python
private_key_password: str
```

- *Type:* str

---

##### `private_key_path`<sup>Optional</sup> <a name="private_key_path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath"></a>

```python
private_key_path: str
```

- *Type:* str

---

##### `realm_specific_service_endpoint_template_enabled`<sup>Optional</sup> <a name="realm_specific_service_endpoint_template_enabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```python
realm_specific_service_endpoint_template_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `retry_duration_seconds`<sup>Optional</sup> <a name="retry_duration_seconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds"></a>

```python
retry_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy_ocid`<sup>Optional</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user_ocid`<sup>Optional</sup> <a name="user_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid"></a>

```python
user_ocid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OciProviderConfig <a name="OciProviderConfig" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import provider

provider.OciProviderConfig(
  alias: str = None,
  auth: str = None,
  config_file_profile: str = None,
  disable_auto_retries: typing.Union[bool, IResolvable] = None,
  fingerprint: str = None,
  ignore_defined_tags: typing.List[str] = None,
  private_key: str = None,
  private_key_password: str = None,
  private_key_path: str = None,
  realm_specific_service_endpoint_template_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  retry_duration_seconds: typing.Union[int, float] = None,
  tenancy_ocid: str = None,
  user_ocid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth">auth</a></code> | <code>str</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile">config_file_profile</a></code> | <code>str</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries">disable_auto_retries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint">fingerprint</a></code> | <code>str</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags">ignore_defined_tags</a></code> | <code>typing.List[str]</code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey">private_key</a></code> | <code>str</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword">private_key_password</a></code> | <code>str</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath">private_key_path</a></code> | <code>str</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled">realm_specific_service_endpoint_template_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region">region</a></code> | <code>str</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds">retry_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid">user_ocid</a></code> | <code>str</code> | (Optional) The user OCID. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth"></a>

```python
auth: str
```

- *Type:* str

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `config_file_profile`<sup>Optional</sup> <a name="config_file_profile" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile"></a>

```python
config_file_profile: str
```

- *Type:* str

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `disable_auto_retries`<sup>Optional</sup> <a name="disable_auto_retries" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries"></a>

```python
disable_auto_retries: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `ignore_defined_tags`<sup>Optional</sup> <a name="ignore_defined_tags" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags"></a>

```python
ignore_defined_tags: typing.List[str]
```

- *Type:* typing.List[str]

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `private_key_password`<sup>Optional</sup> <a name="private_key_password" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword"></a>

```python
private_key_password: str
```

- *Type:* str

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `private_key_path`<sup>Optional</sup> <a name="private_key_path" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath"></a>

```python
private_key_path: str
```

- *Type:* str

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `realm_specific_service_endpoint_template_enabled`<sup>Optional</sup> <a name="realm_specific_service_endpoint_template_enabled" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```python
realm_specific_service_endpoint_template_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `retry_duration_seconds`<sup>Optional</sup> <a name="retry_duration_seconds" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds"></a>

```python
retry_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `tenancy_ocid`<sup>Optional</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `user_ocid`<sup>Optional</sup> <a name="user_ocid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid"></a>

```python
user_ocid: str
```

- *Type:* str

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---



