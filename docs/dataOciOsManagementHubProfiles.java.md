# `dataOciOsManagementHubProfiles` Submodule <a name="`dataOciOsManagementHubProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubProfiles <a name="DataOciOsManagementHubProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles oci_os_management_hub_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfiles;

DataOciOsManagementHubProfiles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .archType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubProfilesFilter>)
//  .id(java.lang.String)
//  .isDefaultProfile(java.lang.Boolean)
//  .isDefaultProfile(IResolvable)
//  .isServiceProvidedProfile(java.lang.Boolean)
//  .isServiceProvidedProfile(IResolvable)
//  .osFamily(java.lang.String)
//  .profileId(java.lang.String)
//  .profileType(java.util.List<java.lang.String>)
//  .registrationType(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .vendorName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#arch_type DataOciOsManagementHubProfiles#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#compartment_id DataOciOsManagementHubProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name DataOciOsManagementHubProfiles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name_contains DataOciOsManagementHubProfiles#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#id DataOciOsManagementHubProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.isDefaultProfile">isDefaultProfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_default_profile DataOciOsManagementHubProfiles#is_default_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_service_provided_profile DataOciOsManagementHubProfiles#is_service_provided_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.osFamily">osFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#os_family DataOciOsManagementHubProfiles#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_id DataOciOsManagementHubProfiles#profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.profileType">profileType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_type DataOciOsManagementHubProfiles#profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.registrationType">registrationType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#registration_type DataOciOsManagementHubProfiles#registration_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#state DataOciOsManagementHubProfiles#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#vendor_name DataOciOsManagementHubProfiles#vendor_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.archType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#arch_type DataOciOsManagementHubProfiles#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#compartment_id DataOciOsManagementHubProfiles#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.displayName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name DataOciOsManagementHubProfiles#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.displayNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name_contains DataOciOsManagementHubProfiles#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#filter DataOciOsManagementHubProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#id DataOciOsManagementHubProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultProfile`<sup>Optional</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.isDefaultProfile"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_default_profile DataOciOsManagementHubProfiles#is_default_profile}.

---

##### `isServiceProvidedProfile`<sup>Optional</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.isServiceProvidedProfile"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_service_provided_profile DataOciOsManagementHubProfiles#is_service_provided_profile}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.osFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#os_family DataOciOsManagementHubProfiles#os_family}.

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_id DataOciOsManagementHubProfiles#profile_id}.

---

##### `profileType`<sup>Optional</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.profileType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_type DataOciOsManagementHubProfiles#profile_type}.

---

##### `registrationType`<sup>Optional</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.registrationType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#registration_type DataOciOsManagementHubProfiles#registration_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#state DataOciOsManagementHubProfiles#state}.

---

##### `vendorName`<sup>Optional</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.vendorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#vendor_name DataOciOsManagementHubProfiles#vendor_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsDefaultProfile">resetIsDefaultProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsServiceProvidedProfile">resetIsServiceProvidedProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileType">resetProfileType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetRegistrationType">resetRegistrationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetVendorName">resetVendorName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsManagementHubProfilesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>>

---

##### `resetArchType` <a name="resetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetArchType"></a>

```java
public void resetArchType()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayNameContains"></a>

```java
public void resetDisplayNameContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefaultProfile` <a name="resetIsDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsDefaultProfile"></a>

```java
public void resetIsDefaultProfile()
```

##### `resetIsServiceProvidedProfile` <a name="resetIsServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsServiceProvidedProfile"></a>

```java
public void resetIsServiceProvidedProfile()
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOsFamily"></a>

```java
public void resetOsFamily()
```

##### `resetProfileId` <a name="resetProfileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileId"></a>

```java
public void resetProfileId()
```

##### `resetProfileType` <a name="resetProfileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileType"></a>

```java
public void resetProfileType()
```

##### `resetRegistrationType` <a name="resetRegistrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetRegistrationType"></a>

```java
public void resetRegistrationType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetState"></a>

```java
public void resetState()
```

##### `resetVendorName` <a name="resetVendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetVendorName"></a>

```java
public void resetVendorName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfiles;

DataOciOsManagementHubProfiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfiles;

DataOciOsManagementHubProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfiles;

DataOciOsManagementHubProfiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfiles;

DataOciOsManagementHubProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsManagementHubProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsManagementHubProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsManagementHubProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsManagementHubProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList">DataOciOsManagementHubProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileCollection">profileCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList">DataOciOsManagementHubProfilesProfileCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archTypeInput">archTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameInput">displayNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfileInput">isDefaultProfileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfileInput">isServiceProvidedProfileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamilyInput">osFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileTypeInput">profileTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationTypeInput">registrationTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorNameInput">vendorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfile">isDefaultProfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileType">profileType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationType">registrationType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filter"></a>

```java
public DataOciOsManagementHubProfilesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList">DataOciOsManagementHubProfilesFilterList</a>

---

##### `profileCollection`<sup>Required</sup> <a name="profileCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileCollection"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionList getProfileCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList">DataOciOsManagementHubProfilesProfileCollectionList</a>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archTypeInput"></a>

```java
public java.lang.String getArchTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContainsInput"></a>

```java
public java.lang.String getDisplayNameContainsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultProfileInput`<sup>Optional</sup> <a name="isDefaultProfileInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfileInput"></a>

```java
public java.lang.Object getIsDefaultProfileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isServiceProvidedProfileInput`<sup>Optional</sup> <a name="isServiceProvidedProfileInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfileInput"></a>

```java
public java.lang.Object getIsServiceProvidedProfileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamilyInput"></a>

```java
public java.lang.String getOsFamilyInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `profileTypeInput`<sup>Optional</sup> <a name="profileTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileTypeInput"></a>

```java
public java.util.List<java.lang.String> getProfileTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registrationTypeInput`<sup>Optional</sup> <a name="registrationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationTypeInput"></a>

```java
public java.util.List<java.lang.String> getRegistrationTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `vendorNameInput`<sup>Optional</sup> <a name="vendorNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorNameInput"></a>

```java
public java.lang.String getVendorNameInput();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefaultProfile`<sup>Required</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfile"></a>

```java
public java.lang.Object getIsDefaultProfile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isServiceProvidedProfile`<sup>Required</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfile"></a>

```java
public java.lang.Object getIsServiceProvidedProfile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `profileType`<sup>Required</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileType"></a>

```java
public java.util.List<java.lang.String> getProfileType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registrationType`<sup>Required</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationType"></a>

```java
public java.util.List<java.lang.String> getRegistrationType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubProfilesConfig <a name="DataOciOsManagementHubProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesConfig;

DataOciOsManagementHubProfilesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .archType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubProfilesFilter>)
//  .id(java.lang.String)
//  .isDefaultProfile(java.lang.Boolean)
//  .isDefaultProfile(IResolvable)
//  .isServiceProvidedProfile(java.lang.Boolean)
//  .isServiceProvidedProfile(IResolvable)
//  .osFamily(java.lang.String)
//  .profileId(java.lang.String)
//  .profileType(java.util.List<java.lang.String>)
//  .registrationType(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .vendorName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#arch_type DataOciOsManagementHubProfiles#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#compartment_id DataOciOsManagementHubProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name DataOciOsManagementHubProfiles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name_contains DataOciOsManagementHubProfiles#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#id DataOciOsManagementHubProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isDefaultProfile">isDefaultProfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_default_profile DataOciOsManagementHubProfiles#is_default_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_service_provided_profile DataOciOsManagementHubProfiles#is_service_provided_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#os_family DataOciOsManagementHubProfiles#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_id DataOciOsManagementHubProfiles#profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileType">profileType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_type DataOciOsManagementHubProfiles#profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.registrationType">registrationType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#registration_type DataOciOsManagementHubProfiles#registration_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#state DataOciOsManagementHubProfiles#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#vendor_name DataOciOsManagementHubProfiles#vendor_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#arch_type DataOciOsManagementHubProfiles#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#compartment_id DataOciOsManagementHubProfiles#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name DataOciOsManagementHubProfiles#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name_contains DataOciOsManagementHubProfiles#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#filter DataOciOsManagementHubProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#id DataOciOsManagementHubProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultProfile`<sup>Optional</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isDefaultProfile"></a>

```java
public java.lang.Object getIsDefaultProfile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_default_profile DataOciOsManagementHubProfiles#is_default_profile}.

---

##### `isServiceProvidedProfile`<sup>Optional</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isServiceProvidedProfile"></a>

```java
public java.lang.Object getIsServiceProvidedProfile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_service_provided_profile DataOciOsManagementHubProfiles#is_service_provided_profile}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#os_family DataOciOsManagementHubProfiles#os_family}.

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_id DataOciOsManagementHubProfiles#profile_id}.

---

##### `profileType`<sup>Optional</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileType"></a>

```java
public java.util.List<java.lang.String> getProfileType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_type DataOciOsManagementHubProfiles#profile_type}.

---

##### `registrationType`<sup>Optional</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.registrationType"></a>

```java
public java.util.List<java.lang.String> getRegistrationType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#registration_type DataOciOsManagementHubProfiles#registration_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#state DataOciOsManagementHubProfiles#state}.

---

##### `vendorName`<sup>Optional</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#vendor_name DataOciOsManagementHubProfiles#vendor_name}.

---

### DataOciOsManagementHubProfilesFilter <a name="DataOciOsManagementHubProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesFilter;

DataOciOsManagementHubProfilesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#name DataOciOsManagementHubProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#values DataOciOsManagementHubProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#regex DataOciOsManagementHubProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#name DataOciOsManagementHubProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#values DataOciOsManagementHubProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#regex DataOciOsManagementHubProfiles#regex}.

---

### DataOciOsManagementHubProfilesProfileCollection <a name="DataOciOsManagementHubProfilesProfileCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollection;

DataOciOsManagementHubProfilesProfileCollection.builder()
    .build();
```


### DataOciOsManagementHubProfilesProfileCollectionItems <a name="DataOciOsManagementHubProfilesProfileCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItems;

DataOciOsManagementHubProfilesProfileCollectionItems.builder()
    .build();
```


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment;

DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment.builder()
    .build();
```


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage;

DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage.builder()
    .build();
```


### DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup <a name="DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup;

DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup.builder()
    .build();
```


### DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources <a name="DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources;

DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubProfilesFilterList <a name="DataOciOsManagementHubProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesFilterList;

new DataOciOsManagementHubProfilesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.get"></a>

```java
public DataOciOsManagementHubProfilesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>>

---


### DataOciOsManagementHubProfilesFilterOutputReference <a name="DataOciOsManagementHubProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesFilterOutputReference;

new DataOciOsManagementHubProfilesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList;

new DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.get"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference;

new DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList;

new DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.get"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference;

new DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsList;

new DataOciOsManagementHubProfilesProfileCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.get"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList;

new DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.get"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference;

new DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference;

new DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isDefaultProfile">isDefaultProfile</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleEnvironment">lifecycleEnvironment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStage">lifecycleStage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStageId">lifecycleStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroup">managedInstanceGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managementStationId">managementStationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.profileType">profileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.registrationType">registrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSourceIds">softwareSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems">DataOciOsManagementHubProfilesProfileCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefaultProfile`<sup>Required</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isDefaultProfile"></a>

```java
public IResolvable getIsDefaultProfile();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isServiceProvidedProfile`<sup>Required</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isServiceProvidedProfile"></a>

```java
public IResolvable getIsServiceProvidedProfile();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleEnvironment`<sup>Required</sup> <a name="lifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleEnvironment"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList getLifecycleEnvironment();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList</a>

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStage"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList getLifecycleStage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList</a>

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStageId"></a>

```java
public java.lang.String getLifecycleStageId();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroup`<sup>Required</sup> <a name="managedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroup"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList getManagedInstanceGroup();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList</a>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

---

##### `managementStationId`<sup>Required</sup> <a name="managementStationId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managementStationId"></a>

```java
public java.lang.String getManagementStationId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `profileType`<sup>Required</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.profileType"></a>

```java
public java.lang.String getProfileType();
```

- *Type:* java.lang.String

---

##### `registrationType`<sup>Required</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.registrationType"></a>

```java
public java.lang.String getRegistrationType();
```

- *Type:* java.lang.String

---

##### `softwareSourceIds`<sup>Required</sup> <a name="softwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSourceIds"></a>

```java
public java.util.List<java.lang.String> getSoftwareSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSources"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList getSoftwareSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems">DataOciOsManagementHubProfilesProfileCollectionItems</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList;

new DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.get"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference;

new DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```java
public IResolvable getIsMandatoryForAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```java
public java.lang.String getSoftwareSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubProfilesProfileCollectionList <a name="DataOciOsManagementHubProfilesProfileCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionList;

new DataOciOsManagementHubProfilesProfileCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.get"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubProfilesProfileCollectionOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_profiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference;

new DataOciOsManagementHubProfilesProfileCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList">DataOciOsManagementHubProfilesProfileCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection">DataOciOsManagementHubProfilesProfileCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.items"></a>

```java
public DataOciOsManagementHubProfilesProfileCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList">DataOciOsManagementHubProfilesProfileCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubProfilesProfileCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection">DataOciOsManagementHubProfilesProfileCollection</a>

---



