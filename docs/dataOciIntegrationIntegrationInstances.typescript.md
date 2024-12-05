# `dataOciIntegrationIntegrationInstances` Submodule <a name="`dataOciIntegrationIntegrationInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIntegrationIntegrationInstances <a name="DataOciIntegrationIntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances oci_integration_integration_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances(scope: Construct, id: string, config: DataOciIntegrationIntegrationInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig">DataOciIntegrationIntegrationInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig">DataOciIntegrationIntegrationInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciIntegrationIntegrationInstancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIntegrationIntegrationInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIntegrationIntegrationInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIntegrationIntegrationInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList">DataOciIntegrationIntegrationInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.integrationInstances">integrationInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList">DataOciIntegrationIntegrationInstancesIntegrationInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filter"></a>

```typescript
public readonly filter: DataOciIntegrationIntegrationInstancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList">DataOciIntegrationIntegrationInstancesFilterList</a>

---

##### `integrationInstances`<sup>Required</sup> <a name="integrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.integrationInstances"></a>

```typescript
public readonly integrationInstances: DataOciIntegrationIntegrationInstancesIntegrationInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList">DataOciIntegrationIntegrationInstancesIntegrationInstancesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciIntegrationIntegrationInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIntegrationIntegrationInstancesConfig <a name="DataOciIntegrationIntegrationInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesConfig: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciIntegrationIntegrationInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#filter DataOciIntegrationIntegrationInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}.

---

### DataOciIntegrationIntegrationInstancesFilter <a name="DataOciIntegrationIntegrationInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesFilter: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}.

---

### DataOciIntegrationIntegrationInstancesIntegrationInstances <a name="DataOciIntegrationIntegrationInstancesIntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstances: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns = { ... }
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection: dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIntegrationIntegrationInstancesFilterList <a name="DataOciIntegrationIntegrationInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIntegrationIntegrationInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>[]

---


### DataOciIntegrationIntegrationInstancesFilterOutputReference <a name="DataOciIntegrationIntegrationInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIntegrationIntegrationInstancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsType">dnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.managedType">managedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.managedType"></a>

```typescript
public readonly managedType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.isImplicit"></a>

```typescript
public readonly isImplicit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetInstanceUrl"></a>

```typescript
public readonly targetInstanceUrl: string;
```

- *Type:* string

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetRole"></a>

```typescript
public readonly targetRole: string;
```

- *Type:* string

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetServiceType"></a>

```typescript
public readonly targetServiceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsType">dnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.managedType">managedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.managedType"></a>

```typescript
public readonly managedType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">timeRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `timeRoleChanged`<sup>Required</sup> <a name="timeRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```typescript
public readonly timeRoleChanged: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">crossRegionIntegrationInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">regionalInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossRegionIntegrationInstanceDetails`<sup>Required</sup> <a name="crossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```typescript
public readonly crossRegionIntegrationInstanceDetails: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `regionalInstanceUrl`<sup>Required</sup> <a name="regionalInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```typescript
public readonly regionalInstanceUrl: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```typescript
public readonly idcsAppDisplayName: string;
```

- *Type:* string

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppId"></a>

```typescript
public readonly idcsAppId: string;
```

- *Type:* string

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```typescript
public readonly idcsAppLocationUrl: string;
```

- *Type:* string

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppName"></a>

```typescript
public readonly idcsAppName: string;
```

- *Type:* string

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```typescript
public readonly instancePrimaryAudienceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">allowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```typescript
public readonly allowlistedIps: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">allowlistedHttpIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">allowlistedHttpVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">isIntegrationVcnAllowlisted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlistedHttpIps`<sup>Required</sup> <a name="allowlistedHttpIps" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```typescript
public readonly allowlistedHttpIps: string[];
```

- *Type:* string[]

---

##### `allowlistedHttpVcns`<sup>Required</sup> <a name="allowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```typescript
public readonly allowlistedHttpVcns: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `isIntegrationVcnAllowlisted`<sup>Required</sup> <a name="isIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```typescript
public readonly isIntegrationVcnAllowlisted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.consumptionModel">consumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.dataRetentionPeriod">dataRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.disasterRecoveryDetails">disasterRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.failoverTrigger">failoverTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsAt">idcsAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceDesignTimeUrl">instanceDesignTimeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.integrationInstanceType">integrationInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isByol">isByol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isFileServerEnabled">isFileServerEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.messagePacks">messagePacks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.privateEndpointOutboundConnection">privateEndpointOutboundConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances">DataOciIntegrationIntegrationInstancesIntegrationInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.alternateCustomEndpoints"></a>

```typescript
public readonly alternateCustomEndpoints: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.attachments"></a>

```typescript
public readonly attachments: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.consumptionModel"></a>

```typescript
public readonly consumptionModel: string;
```

- *Type:* string

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList</a>

---

##### `dataRetentionPeriod`<sup>Required</sup> <a name="dataRetentionPeriod" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.dataRetentionPeriod"></a>

```typescript
public readonly dataRetentionPeriod: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `disasterRecoveryDetails`<sup>Required</sup> <a name="disasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.disasterRecoveryDetails"></a>

```typescript
public readonly disasterRecoveryDetails: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `enableProcessAutomationTrigger`<sup>Required</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.enableProcessAutomationTrigger"></a>

```typescript
public readonly enableProcessAutomationTrigger: number;
```

- *Type:* number

---

##### `extendDataRetentionTrigger`<sup>Required</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.extendDataRetentionTrigger"></a>

```typescript
public readonly extendDataRetentionTrigger: number;
```

- *Type:* number

---

##### `failoverTrigger`<sup>Required</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.failoverTrigger"></a>

```typescript
public readonly failoverTrigger: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAt`<sup>Required</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsAt"></a>

```typescript
public readonly idcsAt: string;
```

- *Type:* string

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsInfo"></a>

```typescript
public readonly idcsInfo: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList</a>

---

##### `instanceDesignTimeUrl`<sup>Required</sup> <a name="instanceDesignTimeUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceDesignTimeUrl"></a>

```typescript
public readonly instanceDesignTimeUrl: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.integrationInstanceType"></a>

```typescript
public readonly integrationInstanceType: string;
```

- *Type:* string

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isByol"></a>

```typescript
public readonly isByol: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDisasterRecoveryEnabled`<sup>Required</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isDisasterRecoveryEnabled"></a>

```typescript
public readonly isDisasterRecoveryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isFileServerEnabled`<sup>Required</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isFileServerEnabled"></a>

```typescript
public readonly isFileServerEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isVisualBuilderEnabled"></a>

```typescript
public readonly isVisualBuilderEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.messagePacks"></a>

```typescript
public readonly messagePacks: number;
```

- *Type:* number

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.networkEndpointDetails"></a>

```typescript
public readonly networkEndpointDetails: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList</a>

---

##### `privateEndpointOutboundConnection`<sup>Required</sup> <a name="privateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.privateEndpointOutboundConnection"></a>

```typescript
public readonly privateEndpointOutboundConnection: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances">DataOciIntegrationIntegrationInstancesIntegrationInstances</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get"></a>

```typescript
public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```typescript
import { dataOciIntegrationIntegrationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">outboundConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `outboundConnectionType`<sup>Required</sup> <a name="outboundConnectionType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```typescript
public readonly outboundConnectionType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection</a>

---



