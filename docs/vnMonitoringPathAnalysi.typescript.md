# `vnMonitoringPathAnalysi` Submodule <a name="`vnMonitoringPathAnalysi` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalysi <a name="VnMonitoringPathAnalysi" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi oci_vn_monitoring_path_analysi}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

new vnMonitoringPathAnalysi.VnMonitoringPathAnalysi(scope: Construct, id: string, config: VnMonitoringPathAnalysiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig">VnMonitoringPathAnalysiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig">VnMonitoringPathAnalysiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint">putDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters">putProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions">putQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint">putSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint">resetDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId">resetPathAnalyzerTestId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters">resetProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions">resetQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint">resetSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationEndpoint` <a name="putDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint"></a>

```typescript
public putDestinationEndpoint(value: VnMonitoringPathAnalysiDestinationEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `putProtocolParameters` <a name="putProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters"></a>

```typescript
public putProtocolParameters(value: VnMonitoringPathAnalysiProtocolParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `putQueryOptions` <a name="putQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions"></a>

```typescript
public putQueryOptions(value: VnMonitoringPathAnalysiQueryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `putSourceEndpoint` <a name="putSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint"></a>

```typescript
public putSourceEndpoint(value: VnMonitoringPathAnalysiSourceEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts"></a>

```typescript
public putTimeouts(value: VnMonitoringPathAnalysiTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

---

##### `resetCacheControl` <a name="resetCacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDestinationEndpoint` <a name="resetDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint"></a>

```typescript
public resetDestinationEndpoint(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPathAnalyzerTestId` <a name="resetPathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId"></a>

```typescript
public resetPathAnalyzerTestId(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetProtocolParameters` <a name="resetProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters"></a>

```typescript
public resetProtocolParameters(): void
```

##### `resetQueryOptions` <a name="resetQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions"></a>

```typescript
public resetQueryOptions(): void
```

##### `resetSourceEndpoint` <a name="resetSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint"></a>

```typescript
public resetSourceEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VnMonitoringPathAnalysi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VnMonitoringPathAnalysi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalysi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint">destinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters">protocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions">queryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint">sourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput">destinationEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput">pathAnalyzerTestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput">protocolParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput">queryOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput">sourceEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId">pathAnalyzerTestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationEndpoint`<sup>Required</sup> <a name="destinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint"></a>

```typescript
public readonly destinationEndpoint: VnMonitoringPathAnalysiDestinationEndpointOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a>

---

##### `protocolParameters`<sup>Required</sup> <a name="protocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters"></a>

```typescript
public readonly protocolParameters: VnMonitoringPathAnalysiProtocolParametersOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a>

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions"></a>

```typescript
public readonly queryOptions: VnMonitoringPathAnalysiQueryOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a>

---

##### `sourceEndpoint`<sup>Required</sup> <a name="sourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint"></a>

```typescript
public readonly sourceEndpoint: VnMonitoringPathAnalysiSourceEndpointOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts"></a>

```typescript
public readonly timeouts: VnMonitoringPathAnalysiTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a>

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `destinationEndpointInput`<sup>Optional</sup> <a name="destinationEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput"></a>

```typescript
public readonly destinationEndpointInput: VnMonitoringPathAnalysiDestinationEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pathAnalyzerTestIdInput`<sup>Optional</sup> <a name="pathAnalyzerTestIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput"></a>

```typescript
public readonly pathAnalyzerTestIdInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `protocolParametersInput`<sup>Optional</sup> <a name="protocolParametersInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput"></a>

```typescript
public readonly protocolParametersInput: VnMonitoringPathAnalysiProtocolParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `queryOptionsInput`<sup>Optional</sup> <a name="queryOptionsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput"></a>

```typescript
public readonly queryOptionsInput: VnMonitoringPathAnalysiQueryOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `sourceEndpointInput`<sup>Optional</sup> <a name="sourceEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput"></a>

```typescript
public readonly sourceEndpointInput: VnMonitoringPathAnalysiSourceEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VnMonitoringPathAnalysiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pathAnalyzerTestId`<sup>Required</sup> <a name="pathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId"></a>

```typescript
public readonly pathAnalyzerTestId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalysiConfig <a name="VnMonitoringPathAnalysiConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

const vnMonitoringPathAnalysiConfig: vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint">destinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId">pathAnalyzerTestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters">protocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions">queryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint">sourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}.

---

##### `destinationEndpoint`<sup>Optional</sup> <a name="destinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint"></a>

```typescript
public readonly destinationEndpoint: VnMonitoringPathAnalysiDestinationEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_endpoint VnMonitoringPathAnalysi#destination_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathAnalyzerTestId`<sup>Optional</sup> <a name="pathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId"></a>

```typescript
public readonly pathAnalyzerTestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}.

---

##### `protocolParameters`<sup>Optional</sup> <a name="protocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters"></a>

```typescript
public readonly protocolParameters: VnMonitoringPathAnalysiProtocolParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol_parameters VnMonitoringPathAnalysi#protocol_parameters}

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions"></a>

```typescript
public readonly queryOptions: VnMonitoringPathAnalysiQueryOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#query_options VnMonitoringPathAnalysi#query_options}

---

##### `sourceEndpoint`<sup>Optional</sup> <a name="sourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint"></a>

```typescript
public readonly sourceEndpoint: VnMonitoringPathAnalysiSourceEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_endpoint VnMonitoringPathAnalysi#source_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VnMonitoringPathAnalysiTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#timeouts VnMonitoringPathAnalysi#timeouts}

---

### VnMonitoringPathAnalysiDestinationEndpoint <a name="VnMonitoringPathAnalysiDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

const vnMonitoringPathAnalysiDestinationEndpoint: vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId">listenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId">vlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId">vnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `listenerId`<sup>Optional</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `networkLoadBalancerId`<sup>Optional</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `vnicId`<sup>Optional</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiProtocolParameters <a name="VnMonitoringPathAnalysiProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

const vnMonitoringPathAnalysiProtocolParameters: vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort">destinationPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode">icmpCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType">icmpType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort">sourcePort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort"></a>

```typescript
public readonly sourcePort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}.

---

### VnMonitoringPathAnalysiQueryOptions <a name="VnMonitoringPathAnalysiQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

const vnMonitoringPathAnalysiQueryOptions: vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis">isBiDirectionalAnalysis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}. |

---

##### `isBiDirectionalAnalysis`<sup>Optional</sup> <a name="isBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis"></a>

```typescript
public readonly isBiDirectionalAnalysis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalysiSourceEndpoint <a name="VnMonitoringPathAnalysiSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

const vnMonitoringPathAnalysiSourceEndpoint: vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId">listenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId">vlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId">vnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `listenerId`<sup>Optional</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `networkLoadBalancerId`<sup>Optional</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `vnicId`<sup>Optional</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiTimeouts <a name="VnMonitoringPathAnalysiTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

const vnMonitoringPathAnalysiTimeouts: vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalysiDestinationEndpointOutputReference <a name="VnMonitoringPathAnalysiDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

new vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId">resetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId">resetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId">resetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId">resetVnicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetListenerId` <a name="resetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId"></a>

```typescript
public resetListenerId(): void
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```typescript
public resetLoadBalancerId(): void
```

##### `resetNetworkLoadBalancerId` <a name="resetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```typescript
public resetNetworkLoadBalancerId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

##### `resetVnicId` <a name="resetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId"></a>

```typescript
public resetVnicId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput">listenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput">vnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId">listenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `listenerIdInput`<sup>Optional</sup> <a name="listenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput"></a>

```typescript
public readonly listenerIdInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```typescript
public readonly networkLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: string;
```

- *Type:* string

---

##### `vnicIdInput`<sup>Optional</sup> <a name="vnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput"></a>

```typescript
public readonly vnicIdInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VnMonitoringPathAnalysiDestinationEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---


### VnMonitoringPathAnalysiProtocolParametersOutputReference <a name="VnMonitoringPathAnalysiProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

new vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort">resetSourcePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPort` <a name="resetDestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort"></a>

```typescript
public resetDestinationPort(): void
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetSourcePort` <a name="resetSourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort"></a>

```typescript
public resetSourcePort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput">destinationPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput">sourcePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort">sourcePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput"></a>

```typescript
public readonly destinationPortInput: number;
```

- *Type:* number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: number;
```

- *Type:* number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: number;
```

- *Type:* number

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput"></a>

```typescript
public readonly sourcePortInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort"></a>

```typescript
public readonly sourcePort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VnMonitoringPathAnalysiProtocolParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---


### VnMonitoringPathAnalysiQueryOptionsOutputReference <a name="VnMonitoringPathAnalysiQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

new vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">resetIsBiDirectionalAnalysis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsBiDirectionalAnalysis` <a name="resetIsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```typescript
public resetIsBiDirectionalAnalysis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">isBiDirectionalAnalysisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis">isBiDirectionalAnalysis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isBiDirectionalAnalysisInput`<sup>Optional</sup> <a name="isBiDirectionalAnalysisInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```typescript
public readonly isBiDirectionalAnalysisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isBiDirectionalAnalysis`<sup>Required</sup> <a name="isBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```typescript
public readonly isBiDirectionalAnalysis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VnMonitoringPathAnalysiQueryOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---


### VnMonitoringPathAnalysiSourceEndpointOutputReference <a name="VnMonitoringPathAnalysiSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

new vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId">resetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId">resetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId">resetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId">resetVnicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetListenerId` <a name="resetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId"></a>

```typescript
public resetListenerId(): void
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId"></a>

```typescript
public resetLoadBalancerId(): void
```

##### `resetNetworkLoadBalancerId` <a name="resetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```typescript
public resetNetworkLoadBalancerId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

##### `resetVnicId` <a name="resetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId"></a>

```typescript
public resetVnicId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput">listenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput">vnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId">listenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `listenerIdInput`<sup>Optional</sup> <a name="listenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput"></a>

```typescript
public readonly listenerIdInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```typescript
public readonly networkLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: string;
```

- *Type:* string

---

##### `vnicIdInput`<sup>Optional</sup> <a name="vnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput"></a>

```typescript
public readonly vnicIdInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VnMonitoringPathAnalysiSourceEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---


### VnMonitoringPathAnalysiTimeoutsOutputReference <a name="VnMonitoringPathAnalysiTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer"></a>

```typescript
import { vnMonitoringPathAnalysi } from 'rhizo-co-terraform-provider-oci'

new vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VnMonitoringPathAnalysiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

---



