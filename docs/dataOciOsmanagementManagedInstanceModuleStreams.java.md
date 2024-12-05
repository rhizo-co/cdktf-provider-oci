# `dataOciOsmanagementManagedInstanceModuleStreams` Submodule <a name="`dataOciOsmanagementManagedInstanceModuleStreams` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceModuleStreams <a name="DataOciOsmanagementManagedInstanceModuleStreams" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams oci_osmanagement_managed_instance_module_streams}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreams;

DataOciOsmanagementManagedInstanceModuleStreams.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsmanagementManagedInstanceModuleStreamsFilter>)
//  .id(java.lang.String)
//  .moduleName(java.lang.String)
//  .streamName(java.lang.String)
//  .streamStatus(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.moduleName">moduleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamStatus">streamStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.moduleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}.

---

##### `streamStatus`<sup>Optional</sup> <a name="streamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName">resetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName">resetStreamName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus">resetStreamStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsmanagementManagedInstanceModuleStreamsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId"></a>

```java
public void resetId()
```

##### `resetModuleName` <a name="resetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName"></a>

```java
public void resetModuleName()
```

##### `resetStreamName` <a name="resetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName"></a>

```java
public void resetStreamName()
```

##### `resetStreamStatus` <a name="resetStreamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus"></a>

```java
public void resetStreamStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreams;

DataOciOsmanagementManagedInstanceModuleStreams.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreams;

DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreams;

DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreams;

DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceModuleStreams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsmanagementManagedInstanceModuleStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceModuleStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances">moduleStreamOnManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput">moduleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput">streamStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus">streamStatus</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a>

---

##### `moduleStreamOnManagedInstances`<sup>Required</sup> <a name="moduleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList getModuleStreamOnManagedInstances();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput"></a>

```java
public java.lang.String getModuleNameInput();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `streamStatusInput`<sup>Optional</sup> <a name="streamStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput"></a>

```java
public java.lang.String getStreamStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `streamStatus`<sup>Required</sup> <a name="streamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus"></a>

```java
public java.lang.String getStreamStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsConfig <a name="DataOciOsmanagementManagedInstanceModuleStreamsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsConfig;

DataOciOsmanagementManagedInstanceModuleStreamsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsmanagementManagedInstanceModuleStreamsFilter>)
//  .id(java.lang.String)
//  .moduleName(java.lang.String)
//  .streamName(java.lang.String)
//  .streamStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus">streamStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}.

---

##### `streamStatus`<sup>Optional</sup> <a name="streamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus"></a>

```java
public java.lang.String getStreamStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsFilter <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsFilter;

DataOciOsmanagementManagedInstanceModuleStreamsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances;

DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances.builder()
    .build();
```


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles;

DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsFilterList <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList;

new DataOciOsmanagementManagedInstanceModuleStreamsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>>

---


### DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference;

new DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList;

new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference;

new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList getProfiles();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a>

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a>

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList;

new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osmanagement_managed_instance_module_streams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference;

new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName">moduleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName"></a>

```java
public java.lang.String getModuleName();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue"></a>

```java
public DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a>

---


