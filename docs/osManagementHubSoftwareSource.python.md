# `osManagementHubSoftwareSource` Submodule <a name="`osManagementHubSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubSoftwareSource <a name="OsManagementHubSoftwareSource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source oci_os_management_hub_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSource(
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
  software_source_type: str,
  custom_software_source_filter: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_automatically_updated: typing.Union[bool, IResolvable] = None,
  is_auto_resolve_dependencies: typing.Union[bool, IResolvable] = None,
  is_created_from_package_list: typing.Union[bool, IResolvable] = None,
  is_latest_content_only: typing.Union[bool, IResolvable] = None,
  origin_software_source_id: str = None,
  packages: typing.List[str] = None,
  software_source_version: str = None,
  timeouts: OsManagementHubSoftwareSourceTimeouts = None,
  vendor_software_sources: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceVendorSoftwareSources]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#compartment_id OsManagementHubSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.softwareSourceType">software_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_type OsManagementHubSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.customSoftwareSourceFilter">custom_software_source_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a></code> | custom_software_source_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#defined_tags OsManagementHubSoftwareSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#description OsManagementHubSoftwareSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#freeform_tags OsManagementHubSoftwareSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isAutomaticallyUpdated">is_automatically_updated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_automatically_updated OsManagementHubSoftwareSource#is_automatically_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isAutoResolveDependencies">is_auto_resolve_dependencies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_auto_resolve_dependencies OsManagementHubSoftwareSource#is_auto_resolve_dependencies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isCreatedFromPackageList">is_created_from_package_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_created_from_package_list OsManagementHubSoftwareSource#is_created_from_package_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isLatestContentOnly">is_latest_content_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_latest_content_only OsManagementHubSoftwareSource#is_latest_content_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.originSoftwareSourceId">origin_software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#origin_software_source_id OsManagementHubSoftwareSource#origin_software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.packages">packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#packages OsManagementHubSoftwareSource#packages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.softwareSourceVersion">software_source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_version OsManagementHubSoftwareSource#software_source_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.vendorSoftwareSources">vendor_software_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]</code> | vendor_software_sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#compartment_id OsManagementHubSoftwareSource#compartment_id}.

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.softwareSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_type OsManagementHubSoftwareSource#software_source_type}.

---

##### `custom_software_source_filter`<sup>Optional</sup> <a name="custom_software_source_filter" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.customSoftwareSourceFilter"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a>

custom_software_source_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#custom_software_source_filter OsManagementHubSoftwareSource#custom_software_source_filter}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#defined_tags OsManagementHubSoftwareSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#description OsManagementHubSoftwareSource#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#freeform_tags OsManagementHubSoftwareSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_automatically_updated`<sup>Optional</sup> <a name="is_automatically_updated" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isAutomaticallyUpdated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_automatically_updated OsManagementHubSoftwareSource#is_automatically_updated}.

---

##### `is_auto_resolve_dependencies`<sup>Optional</sup> <a name="is_auto_resolve_dependencies" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isAutoResolveDependencies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_auto_resolve_dependencies OsManagementHubSoftwareSource#is_auto_resolve_dependencies}.

---

##### `is_created_from_package_list`<sup>Optional</sup> <a name="is_created_from_package_list" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isCreatedFromPackageList"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_created_from_package_list OsManagementHubSoftwareSource#is_created_from_package_list}.

---

##### `is_latest_content_only`<sup>Optional</sup> <a name="is_latest_content_only" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.isLatestContentOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_latest_content_only OsManagementHubSoftwareSource#is_latest_content_only}.

---

##### `origin_software_source_id`<sup>Optional</sup> <a name="origin_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.originSoftwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#origin_software_source_id OsManagementHubSoftwareSource#origin_software_source_id}.

---

##### `packages`<sup>Optional</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.packages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#packages OsManagementHubSoftwareSource#packages}.

---

##### `software_source_version`<sup>Optional</sup> <a name="software_source_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.softwareSourceVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_version OsManagementHubSoftwareSource#software_source_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#timeouts OsManagementHubSoftwareSource#timeouts}

---

##### `vendor_software_sources`<sup>Optional</sup> <a name="vendor_software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.Initializer.parameter.vendorSoftwareSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]

vendor_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#vendor_software_sources OsManagementHubSoftwareSource#vendor_software_sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putCustomSoftwareSourceFilter">put_custom_software_source_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putVendorSoftwareSources">put_vendor_software_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetCustomSoftwareSourceFilter">reset_custom_software_source_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsAutomaticallyUpdated">reset_is_automatically_updated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsAutoResolveDependencies">reset_is_auto_resolve_dependencies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsCreatedFromPackageList">reset_is_created_from_package_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsLatestContentOnly">reset_is_latest_content_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetOriginSoftwareSourceId">reset_origin_software_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetPackages">reset_packages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetSoftwareSourceVersion">reset_software_source_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetVendorSoftwareSources">reset_vendor_software_sources</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_software_source_filter` <a name="put_custom_software_source_filter" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putCustomSoftwareSourceFilter"></a>

```python
def put_custom_software_source_filter(
  module_stream_profile_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]] = None,
  package_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]] = None,
  package_group_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]] = None
) -> None
```

###### `module_stream_profile_filters`<sup>Optional</sup> <a name="module_stream_profile_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putCustomSoftwareSourceFilter.parameter.moduleStreamProfileFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]

module_stream_profile_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#module_stream_profile_filters OsManagementHubSoftwareSource#module_stream_profile_filters}

---

###### `package_filters`<sup>Optional</sup> <a name="package_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putCustomSoftwareSourceFilter.parameter.packageFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]

package_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_filters OsManagementHubSoftwareSource#package_filters}

---

###### `package_group_filters`<sup>Optional</sup> <a name="package_group_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putCustomSoftwareSourceFilter.parameter.packageGroupFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]

package_group_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_group_filters OsManagementHubSoftwareSource#package_group_filters}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#create OsManagementHubSoftwareSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#delete OsManagementHubSoftwareSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#update OsManagementHubSoftwareSource#update}.

---

##### `put_vendor_software_sources` <a name="put_vendor_software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putVendorSoftwareSources"></a>

```python
def put_vendor_software_sources(
  value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceVendorSoftwareSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.putVendorSoftwareSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]

---

##### `reset_custom_software_source_filter` <a name="reset_custom_software_source_filter" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetCustomSoftwareSourceFilter"></a>

```python
def reset_custom_software_source_filter() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_automatically_updated` <a name="reset_is_automatically_updated" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsAutomaticallyUpdated"></a>

```python
def reset_is_automatically_updated() -> None
```

##### `reset_is_auto_resolve_dependencies` <a name="reset_is_auto_resolve_dependencies" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsAutoResolveDependencies"></a>

```python
def reset_is_auto_resolve_dependencies() -> None
```

##### `reset_is_created_from_package_list` <a name="reset_is_created_from_package_list" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsCreatedFromPackageList"></a>

```python
def reset_is_created_from_package_list() -> None
```

##### `reset_is_latest_content_only` <a name="reset_is_latest_content_only" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetIsLatestContentOnly"></a>

```python
def reset_is_latest_content_only() -> None
```

##### `reset_origin_software_source_id` <a name="reset_origin_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetOriginSoftwareSourceId"></a>

```python
def reset_origin_software_source_id() -> None
```

##### `reset_packages` <a name="reset_packages" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetPackages"></a>

```python
def reset_packages() -> None
```

##### `reset_software_source_version` <a name="reset_software_source_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetSoftwareSourceVersion"></a>

```python
def reset_software_source_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vendor_software_sources` <a name="reset_vendor_software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.resetVendorSoftwareSources"></a>

```python
def reset_vendor_software_sources() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubSoftwareSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.availabilityAtOci">availability_at_oci</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.customSoftwareSourceFilter">custom_software_source_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.gpgKeyFingerprint">gpg_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.gpgKeyId">gpg_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.gpgKeyUrl">gpg_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.packageCount">package_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference">OsManagementHubSoftwareSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.vendorSoftwareSources">vendor_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList">OsManagementHubSoftwareSourceVendorSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.customSoftwareSourceFilterInput">custom_software_source_filter_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutomaticallyUpdatedInput">is_automatically_updated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutoResolveDependenciesInput">is_auto_resolve_dependencies_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isCreatedFromPackageListInput">is_created_from_package_list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isLatestContentOnlyInput">is_latest_content_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.originSoftwareSourceIdInput">origin_software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.packagesInput">packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceTypeInput">software_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceVersionInput">software_source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.vendorSoftwareSourcesInput">vendor_software_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutomaticallyUpdated">is_automatically_updated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutoResolveDependencies">is_auto_resolve_dependencies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isCreatedFromPackageList">is_created_from_package_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isLatestContentOnly">is_latest_content_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.originSoftwareSourceId">origin_software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceVersion">software_source_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.availabilityAtOci"></a>

```python
availability_at_oci: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `custom_software_source_filter`<sup>Required</sup> <a name="custom_software_source_filter" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.customSoftwareSourceFilter"></a>

```python
custom_software_source_filter: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference</a>

---

##### `gpg_key_fingerprint`<sup>Required</sup> <a name="gpg_key_fingerprint" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.gpgKeyFingerprint"></a>

```python
gpg_key_fingerprint: str
```

- *Type:* str

---

##### `gpg_key_id`<sup>Required</sup> <a name="gpg_key_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.gpgKeyId"></a>

```python
gpg_key_id: str
```

- *Type:* str

---

##### `gpg_key_url`<sup>Required</sup> <a name="gpg_key_url" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.gpgKeyUrl"></a>

```python
gpg_key_url: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_count`<sup>Required</sup> <a name="package_count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.packageCount"></a>

```python
package_count: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.timeouts"></a>

```python
timeouts: OsManagementHubSoftwareSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference">OsManagementHubSoftwareSourceTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `vendor_software_sources`<sup>Required</sup> <a name="vendor_software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.vendorSoftwareSources"></a>

```python
vendor_software_sources: OsManagementHubSoftwareSourceVendorSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList">OsManagementHubSoftwareSourceVendorSoftwareSourcesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `custom_software_source_filter_input`<sup>Optional</sup> <a name="custom_software_source_filter_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.customSoftwareSourceFilterInput"></a>

```python
custom_software_source_filter_input: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_automatically_updated_input`<sup>Optional</sup> <a name="is_automatically_updated_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutomaticallyUpdatedInput"></a>

```python
is_automatically_updated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_resolve_dependencies_input`<sup>Optional</sup> <a name="is_auto_resolve_dependencies_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutoResolveDependenciesInput"></a>

```python
is_auto_resolve_dependencies_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_created_from_package_list_input`<sup>Optional</sup> <a name="is_created_from_package_list_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isCreatedFromPackageListInput"></a>

```python
is_created_from_package_list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_latest_content_only_input`<sup>Optional</sup> <a name="is_latest_content_only_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isLatestContentOnlyInput"></a>

```python
is_latest_content_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_software_source_id_input`<sup>Optional</sup> <a name="origin_software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.originSoftwareSourceIdInput"></a>

```python
origin_software_source_id_input: str
```

- *Type:* str

---

##### `packages_input`<sup>Optional</sup> <a name="packages_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.packagesInput"></a>

```python
packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_type_input`<sup>Optional</sup> <a name="software_source_type_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceTypeInput"></a>

```python
software_source_type_input: str
```

- *Type:* str

---

##### `software_source_version_input`<sup>Optional</sup> <a name="software_source_version_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceVersionInput"></a>

```python
software_source_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubSoftwareSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a>]

---

##### `vendor_software_sources_input`<sup>Optional</sup> <a name="vendor_software_sources_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.vendorSoftwareSourcesInput"></a>

```python
vendor_software_sources_input: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceVendorSoftwareSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_automatically_updated`<sup>Required</sup> <a name="is_automatically_updated" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutomaticallyUpdated"></a>

```python
is_automatically_updated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_resolve_dependencies`<sup>Required</sup> <a name="is_auto_resolve_dependencies" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isAutoResolveDependencies"></a>

```python
is_auto_resolve_dependencies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_created_from_package_list`<sup>Required</sup> <a name="is_created_from_package_list" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isCreatedFromPackageList"></a>

```python
is_created_from_package_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_latest_content_only`<sup>Required</sup> <a name="is_latest_content_only" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.isLatestContentOnly"></a>

```python
is_latest_content_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_software_source_id`<sup>Required</sup> <a name="origin_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.originSoftwareSourceId"></a>

```python
origin_software_source_id: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `software_source_version`<sup>Required</sup> <a name="software_source_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.softwareSourceVersion"></a>

```python
software_source_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubSoftwareSourceConfig <a name="OsManagementHubSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  software_source_type: str,
  custom_software_source_filter: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_automatically_updated: typing.Union[bool, IResolvable] = None,
  is_auto_resolve_dependencies: typing.Union[bool, IResolvable] = None,
  is_created_from_package_list: typing.Union[bool, IResolvable] = None,
  is_latest_content_only: typing.Union[bool, IResolvable] = None,
  origin_software_source_id: str = None,
  packages: typing.List[str] = None,
  software_source_version: str = None,
  timeouts: OsManagementHubSoftwareSourceTimeouts = None,
  vendor_software_sources: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceVendorSoftwareSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#compartment_id OsManagementHubSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_type OsManagementHubSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.customSoftwareSourceFilter">custom_software_source_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a></code> | custom_software_source_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#defined_tags OsManagementHubSoftwareSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#description OsManagementHubSoftwareSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#freeform_tags OsManagementHubSoftwareSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isAutomaticallyUpdated">is_automatically_updated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_automatically_updated OsManagementHubSoftwareSource#is_automatically_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isAutoResolveDependencies">is_auto_resolve_dependencies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_auto_resolve_dependencies OsManagementHubSoftwareSource#is_auto_resolve_dependencies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isCreatedFromPackageList">is_created_from_package_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_created_from_package_list OsManagementHubSoftwareSource#is_created_from_package_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isLatestContentOnly">is_latest_content_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_latest_content_only OsManagementHubSoftwareSource#is_latest_content_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.originSoftwareSourceId">origin_software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#origin_software_source_id OsManagementHubSoftwareSource#origin_software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.packages">packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#packages OsManagementHubSoftwareSource#packages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.softwareSourceVersion">software_source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_version OsManagementHubSoftwareSource#software_source_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.vendorSoftwareSources">vendor_software_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]</code> | vendor_software_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#compartment_id OsManagementHubSoftwareSource#compartment_id}.

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_type OsManagementHubSoftwareSource#software_source_type}.

---

##### `custom_software_source_filter`<sup>Optional</sup> <a name="custom_software_source_filter" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.customSoftwareSourceFilter"></a>

```python
custom_software_source_filter: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a>

custom_software_source_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#custom_software_source_filter OsManagementHubSoftwareSource#custom_software_source_filter}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#defined_tags OsManagementHubSoftwareSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#description OsManagementHubSoftwareSource#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#freeform_tags OsManagementHubSoftwareSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_automatically_updated`<sup>Optional</sup> <a name="is_automatically_updated" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isAutomaticallyUpdated"></a>

```python
is_automatically_updated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_automatically_updated OsManagementHubSoftwareSource#is_automatically_updated}.

---

##### `is_auto_resolve_dependencies`<sup>Optional</sup> <a name="is_auto_resolve_dependencies" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isAutoResolveDependencies"></a>

```python
is_auto_resolve_dependencies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_auto_resolve_dependencies OsManagementHubSoftwareSource#is_auto_resolve_dependencies}.

---

##### `is_created_from_package_list`<sup>Optional</sup> <a name="is_created_from_package_list" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isCreatedFromPackageList"></a>

```python
is_created_from_package_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_created_from_package_list OsManagementHubSoftwareSource#is_created_from_package_list}.

---

##### `is_latest_content_only`<sup>Optional</sup> <a name="is_latest_content_only" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.isLatestContentOnly"></a>

```python
is_latest_content_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#is_latest_content_only OsManagementHubSoftwareSource#is_latest_content_only}.

---

##### `origin_software_source_id`<sup>Optional</sup> <a name="origin_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.originSoftwareSourceId"></a>

```python
origin_software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#origin_software_source_id OsManagementHubSoftwareSource#origin_software_source_id}.

---

##### `packages`<sup>Optional</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#packages OsManagementHubSoftwareSource#packages}.

---

##### `software_source_version`<sup>Optional</sup> <a name="software_source_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.softwareSourceVersion"></a>

```python
software_source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#software_source_version OsManagementHubSoftwareSource#software_source_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubSoftwareSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#timeouts OsManagementHubSoftwareSource#timeouts}

---

##### `vendor_software_sources`<sup>Optional</sup> <a name="vendor_software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceConfig.property.vendorSoftwareSources"></a>

```python
vendor_software_sources: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceVendorSoftwareSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]

vendor_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#vendor_software_sources OsManagementHubSoftwareSource#vendor_software_sources}

---

### OsManagementHubSoftwareSourceCustomSoftwareSourceFilter <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilter" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter(
  module_stream_profile_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]] = None,
  package_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]] = None,
  package_group_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.property.moduleStreamProfileFilters">module_stream_profile_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]</code> | module_stream_profile_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.property.packageFilters">package_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]</code> | package_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.property.packageGroupFilters">package_group_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]</code> | package_group_filters block. |

---

##### `module_stream_profile_filters`<sup>Optional</sup> <a name="module_stream_profile_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.property.moduleStreamProfileFilters"></a>

```python
module_stream_profile_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]

module_stream_profile_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#module_stream_profile_filters OsManagementHubSoftwareSource#module_stream_profile_filters}

---

##### `package_filters`<sup>Optional</sup> <a name="package_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.property.packageFilters"></a>

```python
package_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]

package_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_filters OsManagementHubSoftwareSource#package_filters}

---

##### `package_group_filters`<sup>Optional</sup> <a name="package_group_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter.property.packageGroupFilters"></a>

```python
package_group_filters: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]

package_group_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_group_filters OsManagementHubSoftwareSource#package_group_filters}

---

### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters(
  filter_type: str = None,
  module_name: str = None,
  profile_name: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#module_name OsManagementHubSoftwareSource#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#profile_name OsManagementHubSoftwareSource#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#stream_name OsManagementHubSoftwareSource#stream_name}. |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#module_name OsManagementHubSoftwareSource#module_name}.

---

##### `profile_name`<sup>Optional</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#profile_name OsManagementHubSoftwareSource#profile_name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#stream_name OsManagementHubSoftwareSource#stream_name}.

---

### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters(
  filter_type: str = None,
  package_name: str = None,
  package_name_pattern: str = None,
  package_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_name OsManagementHubSoftwareSource#package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.packageNamePattern">package_name_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_name_pattern OsManagementHubSoftwareSource#package_name_pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_version OsManagementHubSoftwareSource#package_version}. |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}.

---

##### `package_name`<sup>Optional</sup> <a name="package_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_name OsManagementHubSoftwareSource#package_name}.

---

##### `package_name_pattern`<sup>Optional</sup> <a name="package_name_pattern" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.packageNamePattern"></a>

```python
package_name_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_name_pattern OsManagementHubSoftwareSource#package_name_pattern}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_version OsManagementHubSoftwareSource#package_version}.

---

### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters(
  filter_type: str = None,
  package_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters.property.packageGroups">package_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_groups OsManagementHubSoftwareSource#package_groups}. |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}.

---

##### `package_groups`<sup>Optional</sup> <a name="package_groups" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters.property.packageGroups"></a>

```python
package_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#package_groups OsManagementHubSoftwareSource#package_groups}.

---

### OsManagementHubSoftwareSourceTimeouts <a name="OsManagementHubSoftwareSourceTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#create OsManagementHubSoftwareSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#delete OsManagementHubSoftwareSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#update OsManagementHubSoftwareSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#create OsManagementHubSoftwareSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#delete OsManagementHubSoftwareSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#update OsManagementHubSoftwareSource#update}.

---

### OsManagementHubSoftwareSourceVendorSoftwareSources <a name="OsManagementHubSoftwareSourceVendorSoftwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources(
  display_name: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]

---


### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetModuleName">reset_module_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetProfileName">reset_profile_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_module_name` <a name="reset_module_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetModuleName"></a>

```python
def reset_module_name() -> None
```

##### `reset_profile_name` <a name="reset_profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetProfileName"></a>

```python
def reset_profile_name() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resetStreamName"></a>

```python
def reset_stream_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]

---


### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putModuleStreamProfileFilters">put_module_stream_profile_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putPackageFilters">put_package_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putPackageGroupFilters">put_package_group_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resetModuleStreamProfileFilters">reset_module_stream_profile_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resetPackageFilters">reset_package_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resetPackageGroupFilters">reset_package_group_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_module_stream_profile_filters` <a name="put_module_stream_profile_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putModuleStreamProfileFilters"></a>

```python
def put_module_stream_profile_filters(
  value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putModuleStreamProfileFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]

---

##### `put_package_filters` <a name="put_package_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putPackageFilters"></a>

```python
def put_package_filters(
  value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putPackageFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]

---

##### `put_package_group_filters` <a name="put_package_group_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putPackageGroupFilters"></a>

```python
def put_package_group_filters(
  value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.putPackageGroupFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]

---

##### `reset_module_stream_profile_filters` <a name="reset_module_stream_profile_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resetModuleStreamProfileFilters"></a>

```python
def reset_module_stream_profile_filters() -> None
```

##### `reset_package_filters` <a name="reset_package_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resetPackageFilters"></a>

```python
def reset_package_filters() -> None
```

##### `reset_package_group_filters` <a name="reset_package_group_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resetPackageGroupFilters"></a>

```python
def reset_package_group_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.moduleStreamProfileFilters">module_stream_profile_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageFilters">package_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageGroupFilters">package_group_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.moduleStreamProfileFiltersInput">module_stream_profile_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageFiltersInput">package_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageGroupFiltersInput">package_group_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_stream_profile_filters`<sup>Required</sup> <a name="module_stream_profile_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.moduleStreamProfileFilters"></a>

```python
module_stream_profile_filters: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList</a>

---

##### `package_filters`<sup>Required</sup> <a name="package_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageFilters"></a>

```python
package_filters: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList</a>

---

##### `package_group_filters`<sup>Required</sup> <a name="package_group_filters" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageGroupFilters"></a>

```python
package_group_filters: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList</a>

---

##### `module_stream_profile_filters_input`<sup>Optional</sup> <a name="module_stream_profile_filters_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.moduleStreamProfileFiltersInput"></a>

```python
module_stream_profile_filters_input: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>]]

---

##### `package_filters_input`<sup>Optional</sup> <a name="package_filters_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageFiltersInput"></a>

```python
package_filters_input: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]

---

##### `package_group_filters_input`<sup>Optional</sup> <a name="package_group_filters_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageGroupFiltersInput"></a>

```python
package_group_filters_input: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilter">OsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a>

---


### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]]

---


### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetPackageName">reset_package_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetPackageNamePattern">reset_package_name_pattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetPackageVersion">reset_package_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_package_name` <a name="reset_package_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetPackageName"></a>

```python
def reset_package_name() -> None
```

##### `reset_package_name_pattern` <a name="reset_package_name_pattern" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetPackageNamePattern"></a>

```python
def reset_package_name_pattern() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNameInput">package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNamePatternInput">package_name_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNamePattern">package_name_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `package_name_input`<sup>Optional</sup> <a name="package_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNameInput"></a>

```python
package_name_input: str
```

- *Type:* str

---

##### `package_name_pattern_input`<sup>Optional</sup> <a name="package_name_pattern_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNamePatternInput"></a>

```python
package_name_pattern_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `package_name_pattern`<sup>Required</sup> <a name="package_name_pattern" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNamePattern"></a>

```python
package_name_pattern: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>]

---


### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]]

---


### OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference <a name="OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resetPackageGroups">reset_package_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_package_groups` <a name="reset_package_groups" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resetPackageGroups"></a>

```python
def reset_package_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.packageGroupsInput">package_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.packageGroups">package_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `package_groups_input`<sup>Optional</sup> <a name="package_groups_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.packageGroupsInput"></a>

```python
package_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `package_groups`<sup>Required</sup> <a name="package_groups" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.packageGroups"></a>

```python
package_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>]

---


### OsManagementHubSoftwareSourceTimeoutsOutputReference <a name="OsManagementHubSoftwareSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceTimeouts">OsManagementHubSoftwareSourceTimeouts</a>]

---


### OsManagementHubSoftwareSourceVendorSoftwareSourcesList <a name="OsManagementHubSoftwareSourceVendorSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceVendorSoftwareSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]]

---


### OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference <a name="OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source

osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceVendorSoftwareSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSource.OsManagementHubSoftwareSourceVendorSoftwareSources">OsManagementHubSoftwareSourceVendorSoftwareSources</a>]

---



