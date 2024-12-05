# `dataOciCoreFastConnectProviderService` Submodule <a name="`dataOciCoreFastConnectProviderService` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreFastConnectProviderService <a name="DataOciCoreFastConnectProviderService" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service oci_core_fast_connect_provider_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderService } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig">DataOciCoreFastConnectProviderServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig">DataOciCoreFastConnectProviderServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreFastConnectProviderService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct"></a>

```typescript
import { dataOciCoreFastConnectProviderService } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement"></a>

```typescript
import { dataOciCoreFastConnectProviderService } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource"></a>

```typescript
import { dataOciCoreFastConnectProviderService } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport"></a>

```typescript
import { dataOciCoreFastConnectProviderService } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreFastConnectProviderService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreFastConnectProviderService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreFastConnectProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreFastConnectProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.bandwithShapeManagement">bandwithShapeManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.customerAsnManagement">customerAsnManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.privatePeeringBgpManagement">privatePeeringBgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceKeyManagement">providerServiceKeyManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceName">providerServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.publicPeeringBgpManagement">publicPeeringBgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.requiredTotalCrossConnects">requiredTotalCrossConnects</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.supportedVirtualCircuitTypes">supportedVirtualCircuitTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceIdInput">providerServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bandwithShapeManagement`<sup>Required</sup> <a name="bandwithShapeManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.bandwithShapeManagement"></a>

```typescript
public readonly bandwithShapeManagement: string;
```

- *Type:* string

---

##### `customerAsnManagement`<sup>Required</sup> <a name="customerAsnManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.customerAsnManagement"></a>

```typescript
public readonly customerAsnManagement: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `privatePeeringBgpManagement`<sup>Required</sup> <a name="privatePeeringBgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.privatePeeringBgpManagement"></a>

```typescript
public readonly privatePeeringBgpManagement: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `providerServiceKeyManagement`<sup>Required</sup> <a name="providerServiceKeyManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceKeyManagement"></a>

```typescript
public readonly providerServiceKeyManagement: string;
```

- *Type:* string

---

##### `providerServiceName`<sup>Required</sup> <a name="providerServiceName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceName"></a>

```typescript
public readonly providerServiceName: string;
```

- *Type:* string

---

##### `publicPeeringBgpManagement`<sup>Required</sup> <a name="publicPeeringBgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.publicPeeringBgpManagement"></a>

```typescript
public readonly publicPeeringBgpManagement: string;
```

- *Type:* string

---

##### `requiredTotalCrossConnects`<sup>Required</sup> <a name="requiredTotalCrossConnects" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.requiredTotalCrossConnects"></a>

```typescript
public readonly requiredTotalCrossConnects: number;
```

- *Type:* number

---

##### `supportedVirtualCircuitTypes`<sup>Required</sup> <a name="supportedVirtualCircuitTypes" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.supportedVirtualCircuitTypes"></a>

```typescript
public readonly supportedVirtualCircuitTypes: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerServiceIdInput`<sup>Optional</sup> <a name="providerServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceIdInput"></a>

```typescript
public readonly providerServiceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreFastConnectProviderServiceConfig <a name="DataOciCoreFastConnectProviderServiceConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderService } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreFastConnectProviderServiceConfig: dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#provider_service_id DataOciCoreFastConnectProviderService#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#id DataOciCoreFastConnectProviderService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#provider_service_id DataOciCoreFastConnectProviderService#provider_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#id DataOciCoreFastConnectProviderService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



