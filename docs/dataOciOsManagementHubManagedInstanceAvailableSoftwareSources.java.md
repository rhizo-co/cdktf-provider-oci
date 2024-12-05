# `dataOciOsManagementHubManagedInstanceAvailableSoftwareSources` Submodule <a name="`dataOciOsManagementHubManagedInstanceAvailableSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSources <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources oci_os_management_hub_managed_instance_available_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#filter DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayNameContains"></a>

```java
public void resetDisplayNameContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceAvailableSoftwareSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsManagementHubManagedInstanceAvailableSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceAvailableSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.availableSoftwareSourceCollection">availableSoftwareSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameInput">displayNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availableSoftwareSourceCollection`<sup>Required</sup> <a name="availableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.availableSoftwareSourceCollection"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList getAvailableSoftwareSourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filter"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContainsInput"></a>

```java
public java.lang.String getDisplayNameContainsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection.builder()
    .build();
```


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems.builder()
    .build();
```


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.builder()
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
    .managedInstanceId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#filter DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#values DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#regex DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#values DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#regex DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_available_software_sources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>

---



