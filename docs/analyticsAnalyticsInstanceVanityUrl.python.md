# `analyticsAnalyticsInstanceVanityUrl` Submodule <a name="`analyticsAnalyticsInstanceVanityUrl` Submodule" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalyticsAnalyticsInstanceVanityUrl <a name="AnalyticsAnalyticsInstanceVanityUrl" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url oci_analytics_analytics_instance_vanity_url}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  analytics_instance_id: str,
  ca_certificate: str,
  hosts: typing.List[str],
  private_key: str,
  public_certificate: str,
  description: str = None,
  id: str = None,
  passphrase: str = None,
  timeouts: AnalyticsAnalyticsInstanceVanityUrlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.analyticsInstanceId">analytics_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.caCertificate">ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.publicCertificate">public_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.passphrase">passphrase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analytics_instance_id`<sup>Required</sup> <a name="analytics_instance_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.analyticsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}.

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.caCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}.

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.hosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}.

---

##### `public_certificate`<sup>Required</sup> <a name="public_certificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.publicCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.passphrase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#timeouts AnalyticsAnalyticsInstanceVanityUrl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetPassphrase">reset_passphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_passphrase` <a name="reset_passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetPassphrase"></a>

```python
def reset_passphrase() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AnalyticsAnalyticsInstanceVanityUrl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AnalyticsAnalyticsInstanceVanityUrl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AnalyticsAnalyticsInstanceVanityUrl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AnalyticsAnalyticsInstanceVanityUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnalyticsAnalyticsInstanceVanityUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference">AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceIdInput">analytics_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphraseInput">passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificateInput">public_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceId">analytics_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificate">public_certificate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeouts"></a>

```python
timeouts: AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference">AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference</a>

---

##### `analytics_instance_id_input`<sup>Optional</sup> <a name="analytics_instance_id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceIdInput"></a>

```python
analytics_instance_id_input: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `passphrase_input`<sup>Optional</sup> <a name="passphrase_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphraseInput"></a>

```python
passphrase_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `public_certificate_input`<sup>Optional</sup> <a name="public_certificate_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificateInput"></a>

```python
public_certificate_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AnalyticsAnalyticsInstanceVanityUrlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>]

---

##### `analytics_instance_id`<sup>Required</sup> <a name="analytics_instance_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceId"></a>

```python
analytics_instance_id: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `public_certificate`<sup>Required</sup> <a name="public_certificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificate"></a>

```python
public_certificate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsAnalyticsInstanceVanityUrlConfig <a name="AnalyticsAnalyticsInstanceVanityUrlConfig" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  analytics_instance_id: str,
  ca_certificate: str,
  hosts: typing.List[str],
  private_key: str,
  public_certificate: str,
  description: str = None,
  id: str = None,
  passphrase: str = None,
  timeouts: AnalyticsAnalyticsInstanceVanityUrlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.analyticsInstanceId">analytics_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.publicCertificate">public_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.passphrase">passphrase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analytics_instance_id`<sup>Required</sup> <a name="analytics_instance_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.analyticsInstanceId"></a>

```python
analytics_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}.

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}.

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}.

---

##### `public_certificate`<sup>Required</sup> <a name="public_certificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.publicCertificate"></a>

```python
public_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.timeouts"></a>

```python
timeouts: AnalyticsAnalyticsInstanceVanityUrlTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#timeouts AnalyticsAnalyticsInstanceVanityUrl#timeouts}

---

### AnalyticsAnalyticsInstanceVanityUrlTimeouts <a name="AnalyticsAnalyticsInstanceVanityUrlTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference <a name="AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance_vanity_url

analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnalyticsAnalyticsInstanceVanityUrlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>]

---



