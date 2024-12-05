# `dataOciDelegateAccessControlServiceProviders` Submodule <a name="`dataOciDelegateAccessControlServiceProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlServiceProviders <a name="DataOciDelegateAccessControlServiceProviders" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers oci_delegate_access_control_service_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProviders;

DataOciDelegateAccessControlServiceProviders.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDelegateAccessControlServiceProvidersFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .serviceProviderType(java.lang.String)
//  .state(java.lang.String)
//  .supportedResourceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.serviceProviderType">serviceProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.supportedResourceType">supportedResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#filter DataOciDelegateAccessControlServiceProviders#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}.

---

##### `serviceProviderType`<sup>Optional</sup> <a name="serviceProviderType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.serviceProviderType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}.

---

##### `supportedResourceType`<sup>Optional</sup> <a name="supportedResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.supportedResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetServiceProviderType">resetServiceProviderType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetSupportedResourceType">resetSupportedResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDelegateAccessControlServiceProvidersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetName"></a>

```java
public void resetName()
```

##### `resetServiceProviderType` <a name="resetServiceProviderType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetServiceProviderType"></a>

```java
public void resetServiceProviderType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetState"></a>

```java
public void resetState()
```

##### `resetSupportedResourceType` <a name="resetSupportedResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetSupportedResourceType"></a>

```java
public void resetSupportedResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviders resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProviders;

DataOciDelegateAccessControlServiceProviders.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProviders;

DataOciDelegateAccessControlServiceProviders.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProviders;

DataOciDelegateAccessControlServiceProviders.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProviders;

DataOciDelegateAccessControlServiceProviders.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDelegateAccessControlServiceProviders.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDelegateAccessControlServiceProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDelegateAccessControlServiceProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlServiceProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList">DataOciDelegateAccessControlServiceProvidersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderSummaryCollection">serviceProviderSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderTypeInput">serviceProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceTypeInput">supportedResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderType">serviceProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceType">supportedResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filter"></a>

```java
public DataOciDelegateAccessControlServiceProvidersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList">DataOciDelegateAccessControlServiceProvidersFilterList</a>

---

##### `serviceProviderSummaryCollection`<sup>Required</sup> <a name="serviceProviderSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderSummaryCollection"></a>

```java
public DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList getServiceProviderSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceProviderTypeInput`<sup>Optional</sup> <a name="serviceProviderTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderTypeInput"></a>

```java
public java.lang.String getServiceProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `supportedResourceTypeInput`<sup>Optional</sup> <a name="supportedResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceTypeInput"></a>

```java
public java.lang.String getSupportedResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceProviderType`<sup>Required</sup> <a name="serviceProviderType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderType"></a>

```java
public java.lang.String getServiceProviderType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedResourceType`<sup>Required</sup> <a name="supportedResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceType"></a>

```java
public java.lang.String getSupportedResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlServiceProvidersConfig <a name="DataOciDelegateAccessControlServiceProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersConfig;

DataOciDelegateAccessControlServiceProvidersConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDelegateAccessControlServiceProvidersFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .serviceProviderType(java.lang.String)
//  .state(java.lang.String)
//  .supportedResourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.serviceProviderType">serviceProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.supportedResourceType">supportedResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#filter DataOciDelegateAccessControlServiceProviders#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}.

---

##### `serviceProviderType`<sup>Optional</sup> <a name="serviceProviderType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.serviceProviderType"></a>

```java
public java.lang.String getServiceProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}.

---

##### `supportedResourceType`<sup>Optional</sup> <a name="supportedResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.supportedResourceType"></a>

```java
public java.lang.String getSupportedResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}.

---

### DataOciDelegateAccessControlServiceProvidersFilter <a name="DataOciDelegateAccessControlServiceProvidersFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersFilter;

DataOciDelegateAccessControlServiceProvidersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#values DataOciDelegateAccessControlServiceProviders#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#regex DataOciDelegateAccessControlServiceProviders#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#values DataOciDelegateAccessControlServiceProviders#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#regex DataOciDelegateAccessControlServiceProviders#regex}.

---

### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection;

DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection.builder()
    .build();
```


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems;

DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlServiceProvidersFilterList <a name="DataOciDelegateAccessControlServiceProvidersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersFilterList;

new DataOciDelegateAccessControlServiceProvidersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.get"></a>

```java
public DataOciDelegateAccessControlServiceProvidersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>>

---


### DataOciDelegateAccessControlServiceProvidersFilterOutputReference <a name="DataOciDelegateAccessControlServiceProvidersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersFilterOutputReference;

new DataOciDelegateAccessControlServiceProvidersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList;

new DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.get"></a>

```java
public DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference;

new DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceProviderType">serviceProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceTypes">serviceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.supportedResourceTypes">supportedResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceProviderType`<sup>Required</sup> <a name="serviceProviderType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceProviderType"></a>

```java
public java.lang.String getServiceProviderType();
```

- *Type:* java.lang.String

---

##### `serviceTypes`<sup>Required</sup> <a name="serviceTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceTypes"></a>

```java
public java.util.List<java.lang.String> getServiceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedResourceTypes`<sup>Required</sup> <a name="supportedResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.supportedResourceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList;

new DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.get"></a>

```java
public DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_service_providers.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference;

new DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection</a>

---



