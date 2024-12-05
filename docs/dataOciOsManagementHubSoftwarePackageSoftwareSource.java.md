# `dataOciOsManagementHubSoftwarePackageSoftwareSource` Submodule <a name="`dataOciOsManagementHubSoftwarePackageSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSource <a name="DataOciOsManagementHubSoftwarePackageSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source oci_os_management_hub_software_package_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSource;

DataOciOsManagementHubSoftwarePackageSoftwareSource.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .softwarePackageName(java.lang.String)
//  .archType(java.util.List<java.lang.String>)
//  .availability(java.util.List<java.lang.String>)
//  .availabilityAnywhere(java.util.List<java.lang.String>)
//  .availabilityAtOci(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter>)
//  .id(java.lang.String)
//  .osFamily(java.util.List<java.lang.String>)
//  .softwareSourceType(java.util.List<java.lang.String>)
//  .state(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwarePackageName">softwarePackageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.archType">archType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availability">availability</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAnywhere">availabilityAnywhere</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAtOci">availabilityAtOci</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwareSourceType">softwareSourceType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}.

---

##### `softwarePackageName`<sup>Required</sup> <a name="softwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwarePackageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}.

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.archType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availability"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}.

---

##### `availabilityAnywhere`<sup>Optional</sup> <a name="availabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAnywhere"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}.

---

##### `availabilityAtOci`<sup>Optional</sup> <a name="availabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAtOci"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#filter DataOciOsManagementHubSoftwarePackageSoftwareSource#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.osFamily"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}.

---

##### `softwareSourceType`<sup>Optional</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwareSourceType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.state"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAnywhere">resetAvailabilityAnywhere</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAtOci">resetAvailabilityAtOci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetSoftwareSourceType">resetSoftwareSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>>

---

##### `resetArchType` <a name="resetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetArchType"></a>

```java
public void resetArchType()
```

##### `resetAvailability` <a name="resetAvailability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetAvailabilityAnywhere` <a name="resetAvailabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAnywhere"></a>

```java
public void resetAvailabilityAnywhere()
```

##### `resetAvailabilityAtOci` <a name="resetAvailabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAtOci"></a>

```java
public void resetAvailabilityAtOci()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayNameContains"></a>

```java
public void resetDisplayNameContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetId"></a>

```java
public void resetId()
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOsFamily"></a>

```java
public void resetOsFamily()
```

##### `resetSoftwareSourceType` <a name="resetSoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetSoftwareSourceType"></a>

```java
public void resetSoftwareSourceType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSource;

DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSource;

DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSource;

DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSource;

DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsManagementHubSoftwarePackageSoftwareSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsManagementHubSoftwarePackageSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwarePackageSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceCollection">softwareSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archTypeInput">archTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhereInput">availabilityAnywhereInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOciInput">availabilityAtOciInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityInput">availabilityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamilyInput">osFamilyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageNameInput">softwarePackageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceTypeInput">softwareSourceTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.stateInput">stateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archType">archType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availability">availability</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhere">availabilityAnywhere</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOci">availabilityAtOci</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageName">softwarePackageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceType">softwareSourceType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filter"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList</a>

---

##### `softwareSourceCollection`<sup>Required</sup> <a name="softwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceCollection"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList getSoftwareSourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList</a>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archTypeInput"></a>

```java
public java.util.List<java.lang.String> getArchTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityAnywhereInput`<sup>Optional</sup> <a name="availabilityAnywhereInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhereInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityAnywhereInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityAtOciInput`<sup>Optional</sup> <a name="availabilityAtOciInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOciInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityAtOciInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContainsInput"></a>

```java
public java.lang.String getDisplayNameContainsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamilyInput"></a>

```java
public java.util.List<java.lang.String> getOsFamilyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `softwarePackageNameInput`<sup>Optional</sup> <a name="softwarePackageNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageNameInput"></a>

```java
public java.lang.String getSoftwarePackageNameInput();
```

- *Type:* java.lang.String

---

##### `softwareSourceTypeInput`<sup>Optional</sup> <a name="softwareSourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceTypeInput"></a>

```java
public java.util.List<java.lang.String> getSoftwareSourceTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.stateInput"></a>

```java
public java.util.List<java.lang.String> getStateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archType"></a>

```java
public java.util.List<java.lang.String> getArchType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availability"></a>

```java
public java.util.List<java.lang.String> getAvailability();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityAnywhere`<sup>Required</sup> <a name="availabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhere"></a>

```java
public java.util.List<java.lang.String> getAvailabilityAnywhere();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityAtOci`<sup>Required</sup> <a name="availabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOci"></a>

```java
public java.util.List<java.lang.String> getAvailabilityAtOci();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamily"></a>

```java
public java.util.List<java.lang.String> getOsFamily();
```

- *Type:* java.util.List<java.lang.String>

---

##### `softwarePackageName`<sup>Required</sup> <a name="softwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageName"></a>

```java
public java.lang.String getSoftwarePackageName();
```

- *Type:* java.lang.String

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceType"></a>

```java
public java.util.List<java.lang.String> getSoftwareSourceType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig;

DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.builder()
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
    .compartmentId(java.lang.String)
    .softwarePackageName(java.lang.String)
//  .archType(java.util.List<java.lang.String>)
//  .availability(java.util.List<java.lang.String>)
//  .availabilityAnywhere(java.util.List<java.lang.String>)
//  .availabilityAtOci(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter>)
//  .id(java.lang.String)
//  .osFamily(java.util.List<java.lang.String>)
//  .softwareSourceType(java.util.List<java.lang.String>)
//  .state(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwarePackageName">softwarePackageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.archType">archType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availability">availability</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAnywhere">availabilityAnywhere</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAtOci">availabilityAtOci</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwareSourceType">softwareSourceType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}.

---

##### `softwarePackageName`<sup>Required</sup> <a name="softwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwarePackageName"></a>

```java
public java.lang.String getSoftwarePackageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}.

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.archType"></a>

```java
public java.util.List<java.lang.String> getArchType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availability"></a>

```java
public java.util.List<java.lang.String> getAvailability();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}.

---

##### `availabilityAnywhere`<sup>Optional</sup> <a name="availabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAnywhere"></a>

```java
public java.util.List<java.lang.String> getAvailabilityAnywhere();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}.

---

##### `availabilityAtOci`<sup>Optional</sup> <a name="availabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAtOci"></a>

```java
public java.util.List<java.lang.String> getAvailabilityAtOci();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#filter DataOciOsManagementHubSoftwarePackageSoftwareSource#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.osFamily"></a>

```java
public java.util.List<java.lang.String> getOsFamily();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}.

---

##### `softwareSourceType`<sup>Optional</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwareSourceType"></a>

```java
public java.util.List<java.lang.String> getSoftwareSourceType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}.

---

### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter;

DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}.

---

### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection;

DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection.builder()
    .build();
```


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems;

DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems.builder()
    .build();
```


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources;

DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci">availabilityAtOci</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.packageCount">packageCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.repoId">repoId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion">softwareSourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources">vendorSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `availabilityAtOci`<sup>Required</sup> <a name="availabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci"></a>

```java
public java.lang.String getAvailabilityAtOci();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux"></a>

```java
public IResolvable getIsMandatoryForAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `packageCount`<sup>Required</sup> <a name="packageCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.packageCount"></a>

```java
public java.lang.String getPackageCount();
```

- *Type:* java.lang.String

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.repoId"></a>

```java
public java.lang.String getRepoId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType"></a>

```java
public java.lang.String getSoftwareSourceType();
```

- *Type:* java.lang.String

---

##### `softwareSourceVersion`<sup>Required</sup> <a name="softwareSourceVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion"></a>

```java
public java.lang.String getSoftwareSourceVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `vendorSoftwareSources`<sup>Required</sup> <a name="vendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList getVendorSoftwareSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_software_package_software_source.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference;

new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.items"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection</a>

---



