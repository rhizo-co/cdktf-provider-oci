# `dataOciOsmanagementSoftwareSourceStreamProfiles` Submodule <a name="`dataOciOsmanagementSoftwareSourceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSourceStreamProfiles <a name="DataOciOsmanagementSoftwareSourceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles oci_osmanagement_software_source_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfiles;

DataOciOsmanagementSoftwareSourceStreamProfiles.Builder.create(Construct scope, java.lang.String id)
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
    .softwareSourceId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsmanagementSoftwareSourceStreamProfilesFilter>)
//  .id(java.lang.String)
//  .moduleName(java.lang.String)
//  .profileName(java.lang.String)
//  .streamName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.moduleName">moduleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.softwareSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#filter DataOciOsmanagementSoftwareSourceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.moduleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.streamName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetModuleName">resetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetProfileName">resetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetStreamName">resetStreamName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsmanagementSoftwareSourceStreamProfilesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetId"></a>

```java
public void resetId()
```

##### `resetModuleName` <a name="resetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetModuleName"></a>

```java
public void resetModuleName()
```

##### `resetProfileName` <a name="resetProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetProfileName"></a>

```java
public void resetProfileName()
```

##### `resetStreamName` <a name="resetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetStreamName"></a>

```java
public void resetStreamName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfiles;

DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfiles;

DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfiles;

DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfiles;

DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsmanagementSoftwareSourceStreamProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsmanagementSoftwareSourceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSourceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList">DataOciOsmanagementSoftwareSourceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleStreamProfiles">moduleStreamProfiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleNameInput">moduleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filter"></a>

```java
public DataOciOsmanagementSoftwareSourceStreamProfilesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList">DataOciOsmanagementSoftwareSourceStreamProfilesFilterList</a>

---

##### `moduleStreamProfiles`<sup>Required</sup> <a name="moduleStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleStreamProfiles"></a>

```java
public DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList getModuleStreamProfiles();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleNameInput"></a>

```java
public java.lang.String getModuleNameInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceIdInput"></a>

```java
public java.lang.String getSoftwareSourceIdInput();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourceStreamProfilesConfig <a name="DataOciOsmanagementSoftwareSourceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig;

DataOciOsmanagementSoftwareSourceStreamProfilesConfig.builder()
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
    .softwareSourceId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsmanagementSoftwareSourceStreamProfilesFilter>)
//  .id(java.lang.String)
//  .moduleName(java.lang.String)
//  .profileName(java.lang.String)
//  .streamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#filter DataOciOsmanagementSoftwareSourceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}.

---

### DataOciOsmanagementSoftwareSourceStreamProfilesFilter <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter;

DataOciOsmanagementSoftwareSourceStreamProfilesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#name DataOciOsmanagementSoftwareSourceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#values DataOciOsmanagementSoftwareSourceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#regex DataOciOsmanagementSoftwareSourceStreamProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#name DataOciOsmanagementSoftwareSourceStreamProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#values DataOciOsmanagementSoftwareSourceStreamProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#regex DataOciOsmanagementSoftwareSourceStreamProfiles#regex}.

---

### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles;

DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementSoftwareSourceStreamProfilesFilterList <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList;

new DataOciOsmanagementSoftwareSourceStreamProfilesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get"></a>

```java
public DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>>

---


### DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference;

new DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>

---


### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList;

new DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get"></a>

```java
public DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_software_source_stream_profiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference;

new DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.internalValue"></a>

```java
public DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles</a>

---



