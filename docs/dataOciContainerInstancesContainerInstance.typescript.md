# `dataOciContainerInstancesContainerInstance` Submodule <a name="`dataOciContainerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstance <a name="DataOciContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance(scope: Construct, id: string, config: DataOciContainerInstancesContainerInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig">DataOciContainerInstancesContainerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig">DataOciContainerInstancesContainerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerInstancesContainerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerCount">containerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerRestartPolicy">containerRestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containers">containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList">DataOciContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dnsConfig">dnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList">DataOciContainerInstancesContainerInstanceDnsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">gracefulShutdownTimeoutInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.imagePullSecrets">imagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList">DataOciContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList">DataOciContainerInstancesContainerInstanceShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.vnics">vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList">DataOciContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumeCount">volumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList">DataOciContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceIdInput">containerInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceId">containerInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `containerCount`<sup>Required</sup> <a name="containerCount" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerCount"></a>

```typescript
public readonly containerCount: number;
```

- *Type:* number

---

##### `containerRestartPolicy`<sup>Required</sup> <a name="containerRestartPolicy" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```typescript
public readonly containerRestartPolicy: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containers"></a>

```typescript
public readonly containers: DataOciContainerInstancesContainerInstanceContainersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList">DataOciContainerInstancesContainerInstanceContainersList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: DataOciContainerInstancesContainerInstanceDnsConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList">DataOciContainerInstancesContainerInstanceDnsConfigList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="gracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```typescript
public readonly gracefulShutdownTimeoutInSeconds: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imagePullSecrets`<sup>Required</sup> <a name="imagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```typescript
public readonly imagePullSecrets: DataOciContainerInstancesContainerInstanceImagePullSecretsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList">DataOciContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DataOciContainerInstancesContainerInstanceShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList">DataOciContainerInstancesContainerInstanceShapeConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.vnics"></a>

```typescript
public readonly vnics: DataOciContainerInstancesContainerInstanceVnicsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList">DataOciContainerInstancesContainerInstanceVnicsList</a>

---

##### `volumeCount`<sup>Required</sup> <a name="volumeCount" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumeCount"></a>

```typescript
public readonly volumeCount: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumes"></a>

```typescript
public readonly volumes: DataOciContainerInstancesContainerInstanceVolumesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList">DataOciContainerInstancesContainerInstanceVolumesList</a>

---

##### `containerInstanceIdInput`<sup>Optional</sup> <a name="containerInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceIdInput"></a>

```typescript
public readonly containerInstanceIdInput: string;
```

- *Type:* string

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceId"></a>

```typescript
public readonly containerInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceConfig <a name="DataOciContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceConfig: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.containerInstanceId">containerInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.containerInstanceId"></a>

```typescript
public readonly containerInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}.

---

### DataOciContainerInstancesContainerInstanceContainers <a name="DataOciContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainers: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers = { ... }
```


### DataOciContainerInstancesContainerInstanceContainersHealthChecks <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainersHealthChecks: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks = { ... }
```


### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders = { ... }
```


### DataOciContainerInstancesContainerInstanceContainersResourceConfig <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainersResourceConfig: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig = { ... }
```


### DataOciContainerInstancesContainerInstanceContainersSecurityContext <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainersSecurityContext: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext = { ... }
```


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities = { ... }
```


### DataOciContainerInstancesContainerInstanceContainersVolumeMounts <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceContainersVolumeMounts: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts = { ... }
```


### DataOciContainerInstancesContainerInstanceDnsConfig <a name="DataOciContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceDnsConfig: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig = { ... }
```


### DataOciContainerInstancesContainerInstanceImagePullSecrets <a name="DataOciContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceImagePullSecrets: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets = { ... }
```


### DataOciContainerInstancesContainerInstanceShapeConfig <a name="DataOciContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceShapeConfig: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig = { ... }
```


### DataOciContainerInstancesContainerInstanceVnics <a name="DataOciContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceVnics: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics = { ... }
```


### DataOciContainerInstancesContainerInstanceVolumes <a name="DataOciContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceVolumes: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes = { ... }
```


### DataOciContainerInstancesContainerInstanceVolumesConfigs <a name="DataOciContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerInstancesContainerInstanceVolumesConfigs: dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksList <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">failureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">initialDelayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks">DataOciContainerInstancesContainerInstanceContainersHealthChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```typescript
public readonly headers: DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `initialDelayInSeconds`<sup>Required</sup> <a name="initialDelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```typescript
public readonly initialDelayInSeconds: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainersHealthChecks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks">DataOciContainerInstancesContainerInstanceContainersHealthChecks</a>

---


### DataOciContainerInstancesContainerInstanceContainersList <a name="DataOciContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">containerInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">exitCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">healthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList">DataOciContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">isResourcePrincipalDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">resourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList">DataOciContainerInstancesContainerInstanceContainersResourceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">securityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList">DataOciContainerInstancesContainerInstanceContainersSecurityContextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">timeTerminated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList">DataOciContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers">DataOciContainerInstancesContainerInstanceContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```typescript
public readonly containerInstanceId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```typescript
public readonly exitCode: number;
```

- *Type:* number

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```typescript
public readonly healthChecks: DataOciContainerInstancesContainerInstanceContainersHealthChecksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList">DataOciContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `isResourcePrincipalDisabled`<sup>Required</sup> <a name="isResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```typescript
public readonly isResourcePrincipalDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```typescript
public readonly resourceConfig: DataOciContainerInstancesContainerInstanceContainersResourceConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList">DataOciContainerInstancesContainerInstanceContainersResourceConfigList</a>

---

##### `securityContext`<sup>Required</sup> <a name="securityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```typescript
public readonly securityContext: DataOciContainerInstancesContainerInstanceContainersSecurityContextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList">DataOciContainerInstancesContainerInstanceContainersSecurityContextList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeTerminated`<sup>Required</sup> <a name="timeTerminated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```typescript
public readonly timeTerminated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: DataOciContainerInstancesContainerInstanceContainersVolumeMountsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList">DataOciContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers">DataOciContainerInstancesContainerInstanceContainers</a>

---


### DataOciContainerInstancesContainerInstanceContainersResourceConfigList <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">memoryLimitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">vcpusLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig">DataOciContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryLimitInGbs`<sup>Required</sup> <a name="memoryLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```typescript
public readonly memoryLimitInGbs: number;
```

- *Type:* number

---

##### `vcpusLimit`<sup>Required</sup> <a name="vcpusLimit" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```typescript
public readonly vcpusLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainersResourceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig">DataOciContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">addCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">dropCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addCapabilities`<sup>Required</sup> <a name="addCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```typescript
public readonly addCapabilities: string[];
```

- *Type:* string[]

---

##### `dropCapabilities`<sup>Required</sup> <a name="dropCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```typescript
public readonly dropCapabilities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextList <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">isNonRootUserCheckEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">isRootFileSystemReadonly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">runAsUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">securityContextType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext">DataOciContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList</a>

---

##### `isNonRootUserCheckEnabled`<sup>Required</sup> <a name="isNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```typescript
public readonly isNonRootUserCheckEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRootFileSystemReadonly`<sup>Required</sup> <a name="isRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```typescript
public readonly isRootFileSystemReadonly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `runAsGroup`<sup>Required</sup> <a name="runAsGroup" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

---

##### `securityContextType`<sup>Required</sup> <a name="securityContextType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```typescript
public readonly securityContextType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainersSecurityContext;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext">DataOciContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### DataOciContainerInstancesContainerInstanceContainersVolumeMountsList <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts">DataOciContainerInstancesContainerInstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceContainersVolumeMounts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts">DataOciContainerInstancesContainerInstanceContainersVolumeMounts</a>

---


### DataOciContainerInstancesContainerInstanceDnsConfigList <a name="DataOciContainerInstancesContainerInstanceDnsConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceDnsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceDnsConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">searches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig">DataOciContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `searches`<sup>Required</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```typescript
public readonly searches: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceDnsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig">DataOciContainerInstancesContainerInstanceDnsConfig</a>

---


### DataOciContainerInstancesContainerInstanceImagePullSecretsList <a name="DataOciContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">registryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets">DataOciContainerInstancesContainerInstanceImagePullSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `registryEndpoint`<sup>Required</sup> <a name="registryEndpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```typescript
public readonly registryEndpoint: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceImagePullSecrets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets">DataOciContainerInstancesContainerInstanceImagePullSecrets</a>

---


### DataOciContainerInstancesContainerInstanceShapeConfigList <a name="DataOciContainerInstancesContainerInstanceShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceShapeConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">processorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig">DataOciContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```typescript
public readonly networkingBandwidthInGbps: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```typescript
public readonly processorDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig">DataOciContainerInstancesContainerInstanceShapeConfig</a>

---


### DataOciContainerInstancesContainerInstanceVnicsList <a name="DataOciContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceVnicsOutputReference <a name="DataOciContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">isPublicIpAssigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics">DataOciContainerInstancesContainerInstanceVnics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `isPublicIpAssigned`<sup>Required</sup> <a name="isPublicIpAssigned" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```typescript
public readonly isPublicIpAssigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```typescript
public readonly skipSourceDestCheck: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceVnics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics">DataOciContainerInstancesContainerInstanceVnics</a>

---


### DataOciContainerInstancesContainerInstanceVolumesConfigsList <a name="DataOciContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs">DataOciContainerInstancesContainerInstanceVolumesConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceVolumesConfigs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs">DataOciContainerInstancesContainerInstanceVolumesConfigs</a>

---


### DataOciContainerInstancesContainerInstanceVolumesList <a name="DataOciContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get"></a>

```typescript
public get(index: number): DataOciContainerInstancesContainerInstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceVolumesOutputReference <a name="DataOciContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```typescript
import { dataOciContainerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">backingStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.configs">configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList">DataOciContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes">DataOciContainerInstancesContainerInstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backingStore`<sup>Required</sup> <a name="backingStore" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```typescript
public readonly backingStore: string;
```

- *Type:* string

---

##### `configs`<sup>Required</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```typescript
public readonly configs: DataOciContainerInstancesContainerInstanceVolumesConfigsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList">DataOciContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerInstancesContainerInstanceVolumes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes">DataOciContainerInstancesContainerInstanceVolumes</a>

---



