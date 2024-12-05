# `dataOciWafProtectionCapabilities` Submodule <a name="`dataOciWafProtectionCapabilities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilities <a name="DataOciWafProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities oci_waf_protection_capabilities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities(scope: Construct, id: string, config: DataOciWafProtectionCapabilitiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig">DataOciWafProtectionCapabilitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig">DataOciWafProtectionCapabilitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetGroupTag">resetGroupTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetIsLatestVersion">resetIsLatestVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciWafProtectionCapabilitiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupTag` <a name="resetGroupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetGroupTag"></a>

```typescript
public resetGroupTag(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLatestVersion` <a name="resetIsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetIsLatestVersion"></a>

```typescript
public resetIsLatestVersion(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafProtectionCapabilities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafProtectionCapabilities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList">DataOciWafProtectionCapabilitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.protectionCapabilityCollection">protectionCapabilityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTagInput">groupTagInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersionInput">isLatestVersionInput</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTag">groupTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersion">isLatestVersion</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filter"></a>

```typescript
public readonly filter: DataOciWafProtectionCapabilitiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList">DataOciWafProtectionCapabilitiesFilterList</a>

---

##### `protectionCapabilityCollection`<sup>Required</sup> <a name="protectionCapabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.protectionCapabilityCollection"></a>

```typescript
public readonly protectionCapabilityCollection: DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciWafProtectionCapabilitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]

---

##### `groupTagInput`<sup>Optional</sup> <a name="groupTagInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTagInput"></a>

```typescript
public readonly groupTagInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLatestVersionInput`<sup>Optional</sup> <a name="isLatestVersionInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersionInput"></a>

```typescript
public readonly isLatestVersionInput: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupTag`<sup>Required</sup> <a name="groupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTag"></a>

```typescript
public readonly groupTag: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersion"></a>

```typescript
public readonly isLatestVersion: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilitiesConfig <a name="DataOciWafProtectionCapabilitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilitiesConfig: dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.groupTag">groupTag</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.isLatestVersion">isLatestVersion</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciWafProtectionCapabilitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#filter DataOciWafProtectionCapabilities#filter}

---

##### `groupTag`<sup>Optional</sup> <a name="groupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.groupTag"></a>

```typescript
public readonly groupTag: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLatestVersion`<sup>Optional</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.isLatestVersion"></a>

```typescript
public readonly isLatestVersion: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}.

---

### DataOciWafProtectionCapabilitiesFilter <a name="DataOciWafProtectionCapabilitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilitiesFilter: dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#name DataOciWafProtectionCapabilities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#values DataOciWafProtectionCapabilities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#regex DataOciWafProtectionCapabilities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#name DataOciWafProtectionCapabilities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#values DataOciWafProtectionCapabilities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#regex DataOciWafProtectionCapabilities#regex}.

---

### DataOciWafProtectionCapabilitiesProtectionCapabilityCollection <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilitiesProtectionCapabilityCollection: dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection = { ... }
```


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems: dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems = { ... }
```


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights: dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilitiesFilterList <a name="DataOciWafProtectionCapabilitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafProtectionCapabilitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>[]

---


### DataOciWafProtectionCapabilitiesFilterOutputReference <a name="DataOciWafProtectionCapabilitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafProtectionCapabilitiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.groupTags">groupTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.isLatestVersion">isLatestVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeActionThreshold"></a>

```typescript
public readonly collaborativeActionThreshold: number;
```

- *Type:* number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeWeights"></a>

```typescript
public readonly collaborativeWeights: DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupTags`<sup>Required</sup> <a name="groupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.groupTags"></a>

```typescript
public readonly groupTags: string[];
```

- *Type:* string[]

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.isLatestVersion"></a>

```typescript
public readonly isLatestVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection">DataOciWafProtectionCapabilitiesProtectionCapabilityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafProtectionCapabilitiesProtectionCapabilityCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection">DataOciWafProtectionCapabilitiesProtectionCapabilityCollection</a>

---



