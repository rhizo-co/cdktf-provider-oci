# `dataOciRecoveryRecoveryServiceSubnet` Submodule <a name="`dataOciRecoveryRecoveryServiceSubnet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryRecoveryServiceSubnet <a name="DataOciRecoveryRecoveryServiceSubnet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnet oci_recovery_recovery_service_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet(scope: Construct, id: string, config: DataOciRecoveryRecoveryServiceSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig">DataOciRecoveryRecoveryServiceSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig">DataOciRecoveryRecoveryServiceSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isConstruct"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformElement"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformDataSource"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRecoveryRecoveryServiceSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRecoveryRecoveryServiceSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryRecoveryServiceSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.recoveryServiceSubnetIdInput">recoveryServiceSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetIdInput`<sup>Optional</sup> <a name="recoveryServiceSubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.recoveryServiceSubnetIdInput"></a>

```typescript
public readonly recoveryServiceSubnetIdInput: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryRecoveryServiceSubnetConfig <a name="DataOciRecoveryRecoveryServiceSubnetConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryRecoveryServiceSubnetConfig: dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnet#recovery_service_subnet_id DataOciRecoveryRecoveryServiceSubnet#recovery_service_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnet.DataOciRecoveryRecoveryServiceSubnetConfig.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnet#recovery_service_subnet_id DataOciRecoveryRecoveryServiceSubnet#recovery_service_subnet_id}.

---



